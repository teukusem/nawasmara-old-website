import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { setCookie } from 'cookies-next';
// Components
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Trans, useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
// Hooks
import { forwardRef, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppImage from 'src/components/image';
import Spinner from 'src/components/spinner';
import { cookiesKey, url } from 'src/config';
import { ACTIVITY_ACTION, ACTIVITY_ACTION_TYPE } from 'src/constants/activity-log';
import { pagePermissions } from 'src/constants/general';
import { useIsLoggedIn, useProfile } from 'src/hooks/authentication';
import useResponsive from 'src/hooks/useResponsive';
// Hooks
import { LOGIN, PATH_GENERAL } from 'src/routes/path';
import { addActivityLog } from 'src/utils/helpers/addActivityLog';
import { getDomainName, mappingZendeskLocale } from 'src/utils/modules/helpers/helper';
import { clearProfile } from 'src/utils/modules/profile';
// Utils
import { logoutClient } from 'src/utils/modules/request/auth';
import { getDisclaimerCopy } from 'src/utils/modules/request/copywriting';
import { setLanguage } from 'src/utils/modules/request/settings';
import { cn } from 'src/utils/tailwind-cn';

// Others
import { classes } from './styles';
import { dspSetMenuFocused } from 'src/redux/slices/menu';

export const LanguageSelect = ({ value, setValue, list }) => {
  const { focusedMenu } = useSelector((state) => state.menuState);
  const dispatch = useDispatch();

  return (
    <div className="group">
      <button
        id="select-language"
        className="flex flex-row items-center gap-2"
        onFocus={() => dispatch(dspSetMenuFocused('language'))}
        onBlur={(e) => {
          // Delay the blur to allow onClick to fire first
          setTimeout(() => {
            // Only blur if the related target is not within the dropdown
            if (!e.relatedTarget || !e.currentTarget.parentElement.contains(e.relatedTarget)) {
              dispatch(dspSetMenuFocused(''));
            }
          }, 150);
        }}
      >
        <AppImage className="w-4" src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/globe.svg`} />
        <p id="selected-language" className="text-white">
          {value}
        </p>
        <AppImage
          className="fill-white w-2"
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/arrow_dropdown.svg`}
        />
      </button>
      <div
        className={cn(
          'rounded absolute bg-gray-800 px-4 lg:p-0 lg:min-w-[5.5rem] -ml-1 lg:ml-0 mt-2 opacity-0 hidden',
          `${focusedMenu === 'language' && 'opacity-100 inline'}`,
          'duration-500 ease-in-out transform z-10'
        )}
      >
        <div className="flex flex-col justify-start [&>*:not(:last-child)]:border-gray-700 [&>*:not(:last-child)]:border-b-2 [&>*:not(:last-child)]:lg:border-0 [&>*:not(:last-child)]:border-dotted">
          {list?.map((lang, index) => (
            <button id={`option-language-${lang?.value}`} key={index}>
              <p
                className="lg:rounded py-4 lg:p-2 cursor-pointer text-left text-white"
                onClick={() => setValue({ label: lang?.label, value: lang?.value })}
              >
                {lang.label}
              </p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

LanguageSelect.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
  list: PropTypes.array,
};

const DashboardHeader = forwardRef(({ disclaimerState }, ref) => {
  const [mappedLang, setMappedLang] = useState([]);
  const { isMobile } = useResponsive();

  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { pathname, asPath, query } = router;
  const itemState = useSelector((state) => state.settings);
  const authState = useSelector((state) => state.authState);

  const isLoggedIn = useIsLoggedIn();
  const profile = useProfile();
  const [selectedLanguage, setSelectedLanguage] = useState({
    label: '',
    value: '',
  });
  const [isDisclaimerDetailShown, setIsDisclaimerDetailShown] = disclaimerState;
  const [disclaimerCopy, setDisclaimerCopy] = useState({
    title: '',
    description: '',
  });
  const [disclaimerLoading, setDisclaimerLoading] = useState(true);
  const isImpersonate = authState?.fullProfile?.permissions?.includes(pagePermissions.guest);

  useEffect(() => {
    const initialize = async () => {
      const itemLang = itemState.listLanguages;

      const mapped = itemLang
        ?.filter((r) => i18n?.options?.locales?.find((v) => v === r.language_code))
        ?.map((item) => ({
          label: item.language,
          value: item.language_code,
        }));
      const defaultLang = mapped?.find((lang) => lang?.value === router.locale);
      setMappedLang(mapped);
      setSelectedLanguage(defaultLang);

      if (disclaimerCopy?.description?.length === 0) {
        const { data } = await getDisclaimerCopy({ locale: defaultLang?.value });
        if (data) setDisclaimerCopy(data?.disclaimer);
        setDisclaimerLoading(false);
      }
    };

    initialize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickLanguage = async (language) => {
    if (isImpersonate) return;
    console.log('handleClickLanguage', language);
    const { value: selectedLocale } = language || {};
    if (router.locale === selectedLocale) return;

    if (isLoggedIn) await setLanguage({ language_code: selectedLocale });
    setSelectedLanguage(language);
    setCookie(cookiesKey.siteLang, selectedLocale, {
      domain: getDomainName(window.location.hostname),
      secure: true,
      sameSite: 'lax',
    });
    return router.push({ pathname, query }, asPath, { locale: selectedLocale });
  };

  const handleLogout = useCallback(async () => {
    const result = await logoutClient();
    clearProfile();

    if (result) {
      addActivityLog({
        action: ACTIVITY_ACTION.logout,
        action_type: ACTIVITY_ACTION_TYPE.success,
      });
      if (result?.headersMobile?.clientType?.length > 0) {
        return (window.location.href = PATH_GENERAL.loginWebview.link);
      } else return (window.location.href = PATH_GENERAL.login.link);
    }
  }, []);

  const handleHeaderShown = (showHeader) => {
    setIsDisclaimerDetailShown(showHeader);
  };

  const RenderDisclaimer = () => {
    // text is shown in login page only
    if (router.pathname !== '/login') return;

    const description = disclaimerCopy?.description || '';
    const title = disclaimerCopy?.title || '';

    return (
      <div className={classes.disclaimerContainer} ref={ref}>
        {disclaimerLoading ? (
          <Spinner />
        ) : isMobile ? (
          <>
            {isDisclaimerDetailShown ? (
              <div className="grid items-center">
                <Trans>
                  <div className={classes.disclaimerText}>{description}</div>
                </Trans>
                <ExpandLess className="w-fit m-auto" fontSize="small" onClick={() => handleHeaderShown(false)} />
              </div>
            ) : (
              <div className="grid justify-items-center">
                <p className={classes.disclaimerText} onClick={() => setIsDisclaimerDetailShown(true)}>
                  <Trans>
                    <div className="text-gray-200">{title}</div>
                  </Trans>
                </p>
                <ExpandMore className="w-fit  m-auto" fontSize="small" onClick={() => handleHeaderShown(true)} />
              </div>
            )}
          </>
        ) : (
          <Trans>
            <div className={classes.disclaimerText}>{description}</div>
          </Trans>
        )}
      </div>
    );
  };

  const renderLoginButton = () => {
    if (isLoggedIn) {
      return (
        <div className="flexRowCenter">
          <div className="flexRowCenter">
            <AppImage
              className={`${classes.langImg} navHeaderPager`}
              src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/menu-icon/login-user.svg`}
              alt="login-icon"
            />
            <p className="userfname text-white">{profile.profile?.first_name}</p>
          </div>
          <div className="w-[1px] h-[14px] bg-[#fff] mx-[4px]" />
          <div id="btn-logout" className="cursor-pointer" onClick={handleLogout}>
            <p className="text-white">{t('dashboard_header.logout')}</p>
          </div>
        </div>
      );
    }
    return (
      <Link href={LOGIN} className="flexRowCenter">
        <AppImage
          className={`${classes.langImg} navHeaderPager`}
          src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/menu-icon/login-user.svg`}
          alt="login-icon"
        />
        <p className="text-white">{t('dashboard_header.login')}</p>
      </Link>
    );
  };

  return (
    <header>
      <RenderDisclaimer />
      <div>
        <div className="hidden md:flex flex-row justify-end items-center py-2 px-5 greenGradientBg text-white font-medium">
          {/* <Link href={url.download} className="flex flex-row gap-2">
            <AppImage className={classes.mobImg} src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/mobile-phone-2.svg`} alt="mobile-phone" />
            <p className="text-white">{t('dashboard_header.download_app')}</p>
          </Link> */}
          <div className="flex flex-row gap-7">
            <LanguageSelect value={selectedLanguage?.label} setValue={handleClickLanguage} list={mappedLang} />
            <Link
              href={`${url.supportCenter}/${mappingZendeskLocale(router.locale)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flexRowCenter"
            >
              <AppImage
                className={`${classes.langImg} navHeaderPager`}
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/bx_bxs-help-circle.svg`}
                alt="question"
              />
              <p className="text-white">{t('dashboard_header.support_center')}</p>
            </Link>
            <div className="flexRowCenter">
              <AppImage
                className={`${classes.langImg} navHeaderPager`}
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}/static/assets/phone.svg`}
                alt="phone"
              />
              <p className="text-white">{t('dashboard_header.contact_number')}</p>
            </div>
            {renderLoginButton()}
          </div>
        </div>
      </div>
    </header>
  );
});

DashboardHeader.propTypes = {
  disclaimerState: PropTypes.bool,
};

export default DashboardHeader;
