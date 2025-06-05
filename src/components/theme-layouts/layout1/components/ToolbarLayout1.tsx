import { ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import clsx from "clsx";
import { memo, useState } from "react";
import NavbarToggleButton from "src/components/theme-layouts/components/navbar/NavbarToggleButton";
import { selectFuseNavbar } from "src/components/theme-layouts/components/navbar/navbarSlice";
import { useAppSelector } from "src/store/hooks";
import themeOptions from "src/configs/themeOptions";
import _ from "lodash";
import LightDarkModeToggle from "src/components/LightDarkModeToggle";
import useFuseLayoutSettings from "@fuse/core/FuseLayout/useFuseLayoutSettings";
import { useToolbarTheme } from "@fuse/core/FuseSettings/hooks/fuseThemeHooks";
import NotificationPanelToggleButton from "@/app/(control-panel)/apps/notifications/NotificationPanelToggleButton";
import AdjustFontSize from "../../components/AdjustFontSize";
import FullScreenToggle from "../../components/FullScreenToggle";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import NavigationShortcuts from "../../components/navigation/NavigationShortcuts";
import NavigationSearch from "../../components/navigation/NavigationSearch";
import QuickPanelToggleButton from "../../components/quickPanel/QuickPanelToggleButton";
import { Layout1ConfigDefaultsType } from "@/components/theme-layouts/layout1/Layout1Config";
import useThemeMediaQuery from "../../../../@fuse/hooks/useThemeMediaQuery";
import {
  Avatar,
  Button,
  Typography,
  Popover,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import { useNavigate } from "react-router";
import StudyGlobalLogo from "@/utils/study_global";
import useUser from "@auth/useUser";

type ToolbarLayout1Props = {
  className?: string;
  isApproved: boolean;
};

/**
 * The toolbar layout 1.
 */
function ToolbarLayout1(props: ToolbarLayout1Props) {
  const { className, isApproved } = props;
  const router = useNavigate();
  const { signOut, } = useUser();
  const [userMenu, setUserMenu] = useState<HTMLElement | null>(null);

  const settings = useFuseLayoutSettings();
  const config = settings.config as Layout1ConfigDefaultsType;
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down("lg"));

  const navbar = useAppSelector(selectFuseNavbar);
  const toolbarTheme = useToolbarTheme();

  const userMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

//   const handleLogout = () => {
//     // Add your logout logic here
//     userMenuClose();
// 	signOut();
//     router("/sign-in");
//   };

  // If not approved, show minimal toolbar
  if (!isApproved) {
    return (
      <ThemeProvider theme={toolbarTheme}>
        <AppBar
          id="fuse-toolbar"
          className={clsx("relative z-20 flex border-b", className)}
          color="default"
          sx={(theme) => ({
            backgroundColor: toolbarTheme.palette.background.default,
            ...theme.applyStyles("light", {
              backgroundColor: toolbarTheme.palette.background.paper,
            }),
          })}
          position="static"
          elevation={0}
        >
          <Toolbar className="min-h-12 p-0 md:min-h-16">
            {/* Left side - Application Heading */}
            <div className="flex flex-1 px-2 md:px-4">
              {/* <Typography
                variant="h6"
                className="font-semibold text-lg"
                color="textPrimary"
              >
              </Typography> */}
              <StudyGlobalLogo />
            </div>

            {/* Right side - Profile Icon */}
            <div className="flex items-center px-2 md:px-4">
              <Button
                className="user-menu flex justify-center items-center shrink-0 min-h-10 h-10 w-10 rounded-full p-0"
                sx={(theme) => ({
                  borderColor: theme.vars.palette.divider,
                  "&:hover, &:focus": {
                    backgroundColor: `rgba(${theme.vars.palette.dividerChannel} / 0.6)`,
                    ...theme.applyStyles("dark", {
                      backgroundColor: `rgba(${theme.vars.palette.dividerChannel} / 0.1)`,
                    }),
                  },
                })}
                onClick={userMenuClick}
                color="inherit"
              >
                <Avatar
                  sx={(theme) => ({
                    background: theme.vars.palette.background.default,
                    color: theme.vars.palette.text.secondary,
                    width: 32,
                    height: 32,
                  })}
                  className="rounded-full"
                >
                  <FuseSvgIcon size={20}>heroicons-outline:user</FuseSvgIcon>
                </Avatar>
              </Button>

              {/* User Menu Popover */}
              <Popover
                open={Boolean(userMenu)}
                anchorEl={userMenu}
                onClose={userMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                classes={{
                  paper: "py-2 min-w-48",
                }}
              >
                <MenuItem onClick={signOut}>
                  <ListItemIcon className="min-w-9">
                    <FuseSvgIcon>
                      heroicons-outline:arrow-right-on-rectangle
                    </FuseSvgIcon>
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </MenuItem>
              </Popover>
            </div>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    );
  }

  // If approved, show full toolbar
  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className={clsx("relative z-20 flex border-b", className)}
        color="default"
        sx={(theme) => ({
          backgroundColor: toolbarTheme.palette.background.default,
          ...theme.applyStyles("light", {
            backgroundColor: toolbarTheme.palette.background.paper,
          }),
        })}
        position="static"
        elevation={0}
      >
        <Toolbar className="min-h-12 p-0 md:min-h-16">
          <div className="flex flex-1 px-2 md:px-4 space-x-2 ">
            {config.navbar.display && config.navbar.position === "left" && (
              <>
                {!isMobile && (
                  <>
                    {(config.navbar.style === "style-3" ||
                      config.navbar.style === "style-3-dense") && (
                      <NavbarToggleButton className="h-10 w-10 p-0" />
                    )}

                    {config.navbar.style === "style-1" && !navbar.open && (
                      <NavbarToggleButton className="h-10 w-10 p-0" />
                    )}
                  </>
                )}

                {isMobile && (
                  <NavbarToggleButton className="h-10 w-10 p-0 sm:mx-2" />
                )}
              </>
            )}

            {!isMobile && <NavigationShortcuts />}
          </div>

          <div className="flex items-center overflow-x-auto px-2 md:px-4 space-x-1.5">
            <LanguageSwitcher />
            <AdjustFontSize />
            <FullScreenToggle />
            <LightDarkModeToggle
              lightTheme={_.find(themeOptions, { id: "Default" })}
              darkTheme={_.find(themeOptions, { id: "Default Dark" })}
            />
            <NavigationSearch />
            <QuickPanelToggleButton />
            <NotificationPanelToggleButton />
          </div>

          {config.navbar.display && config.navbar.position === "right" && (
            <>
              {!isMobile && (
                <>
                  {(config.navbar.style === "style-3" ||
                    config.navbar.style === "style-3-dense") && (
                    <NavbarToggleButton className="h-10 w-10 p-0" />
                  )}

                  {config.navbar.style === "style-1" && !navbar.open && (
                    <NavbarToggleButton className="h-10 w-10 p-0" />
                  )}
                </>
              )}

              {isMobile && (
                <NavbarToggleButton className="h-10 w-10 p-0 sm:mx-2" />
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default memo(ToolbarLayout1);

// import { ThemeProvider } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import clsx from 'clsx';
// import { memo } from 'react';
// import NavbarToggleButton from 'src/components/theme-layouts/components/navbar/NavbarToggleButton';
// import { selectFuseNavbar } from 'src/components/theme-layouts/components/navbar/navbarSlice';
// import { useAppSelector } from 'src/store/hooks';
// import themeOptions from 'src/configs/themeOptions';
// import _ from 'lodash';
// import LightDarkModeToggle from 'src/components/LightDarkModeToggle';
// import useFuseLayoutSettings from '@fuse/core/FuseLayout/useFuseLayoutSettings';
// import { useToolbarTheme } from '@fuse/core/FuseSettings/hooks/fuseThemeHooks';
// import NotificationPanelToggleButton from '@/app/(control-panel)/apps/notifications/NotificationPanelToggleButton';
// import AdjustFontSize from '../../components/AdjustFontSize';
// import FullScreenToggle from '../../components/FullScreenToggle';
// import LanguageSwitcher from '../../components/LanguageSwitcher';
// import NavigationShortcuts from '../../components/navigation/NavigationShortcuts';
// import NavigationSearch from '../../components/navigation/NavigationSearch';
// import QuickPanelToggleButton from '../../components/quickPanel/QuickPanelToggleButton';
// import { Layout1ConfigDefaultsType } from '@/components/theme-layouts/layout1/Layout1Config';
// import useThemeMediaQuery from '../../../../@fuse/hooks/useThemeMediaQuery';

// type ToolbarLayout1Props = {
// 	className?: string;
// 	isApproved: boolean;
// };

// /**
//  * The toolbar layout 1.
//  */
// function ToolbarLayout1(props: ToolbarLayout1Props) {
// 	const { className, isApproved } = props;

// 	const settings = useFuseLayoutSettings();
// 	const config = settings.config as Layout1ConfigDefaultsType;
// 	const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

// 	const navbar = useAppSelector(selectFuseNavbar);
// 	const toolbarTheme = useToolbarTheme();

// 	return (
// 		<ThemeProvider theme={toolbarTheme}>
// 			<AppBar
// 				id="fuse-toolbar"
// 				className={clsx('relative z-20 flex border-b', className)}
// 				color="default"
// 				sx={(theme) => ({
// 					backgroundColor: toolbarTheme.palette.background.default,
// 					...theme.applyStyles('light', {
// 						backgroundColor: toolbarTheme.palette.background.paper
// 					})
// 				})}
// 				position="static"
// 				elevation={0}
// 			>
// 				<Toolbar className="min-h-12 p-0 md:min-h-16">
// 					<div className="flex flex-1 px-2 md:px-4 space-x-2 ">
// 						{config.navbar.display && config.navbar.position === 'left' && (
// 							<>
// 								{!isMobile && (
// 									<>
// 										{(config.navbar.style === 'style-3' ||
// 											config.navbar.style === 'style-3-dense') && (
// 											<NavbarToggleButton className="h-10 w-10 p-0" />
// 										)}

// 										{config.navbar.style === 'style-1' && !navbar.open && (
// 											<NavbarToggleButton className="h-10 w-10 p-0" />
// 										)}
// 									</>
// 								)}

// 								{isMobile && <NavbarToggleButton className="h-10 w-10 p-0 sm:mx-2" />}
// 							</>
// 						)}

// 						{!isMobile && <NavigationShortcuts />}
// 					</div>

// 					<div className="flex items-center overflow-x-auto px-2 md:px-4 space-x-1.5">
// 						<LanguageSwitcher />
// 						<AdjustFontSize />
// 						<FullScreenToggle />
// 						<LightDarkModeToggle
// 							lightTheme={_.find(themeOptions, { id: 'Default' })}
// 							darkTheme={_.find(themeOptions, { id: 'Default Dark' })}
// 						/>
// 						<NavigationSearch />
// 						<QuickPanelToggleButton />
// 						<NotificationPanelToggleButton />
// 					</div>

// 					{config.navbar.display && config.navbar.position === 'right' && (
// 						<>
// 							{!isMobile && (
// 								<>
// 									{(config.navbar.style === 'style-3' || config.navbar.style === 'style-3-dense') && (
// 										<NavbarToggleButton className="h-10 w-10 p-0" />
// 									)}

// 									{config.navbar.style === 'style-1' && !navbar.open && (
// 										<NavbarToggleButton className="h-10 w-10 p-0" />
// 									)}
// 								</>
// 							)}

// 							{isMobile && <NavbarToggleButton className="h-10 w-10 p-0 sm:mx-2" />}
// 						</>
// 					)}
// 				</Toolbar>
// 			</AppBar>
// 		</ThemeProvider>
// 	);
// }

// export default memo(ToolbarLayout1);
