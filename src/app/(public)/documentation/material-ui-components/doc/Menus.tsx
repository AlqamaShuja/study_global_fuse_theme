import FuseExample from '@fuse/core/FuseExample';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicMenuComponent from '../components/menus/BasicMenu';
import BasicMenuRaw from '../components/menus/BasicMenu.tsx?raw';
import IconMenuComponent from '../components/menus/IconMenu';
import IconMenuRaw from '../components/menus/IconMenu.tsx?raw';
import DenseMenuComponent from '../components/menus/DenseMenu';
import DenseMenuRaw from '../components/menus/DenseMenu.tsx?raw';
import SimpleListMenuComponent from '../components/menus/SimpleListMenu';
import SimpleListMenuRaw from '../components/menus/SimpleListMenu.tsx?raw';
import PositionedMenuComponent from '../components/menus/PositionedMenu';
import PositionedMenuRaw from '../components/menus/PositionedMenu.tsx?raw';
import MenuListCompositionComponent from '../components/menus/MenuListComposition';
import MenuListCompositionRaw from '../components/menus/MenuListComposition.tsx?raw';
import AccountMenuComponent from '../components/menus/AccountMenu';
import AccountMenuRaw from '../components/menus/AccountMenu.tsx?raw';
import CustomizedMenusComponent from '../components/menus/CustomizedMenus';
import CustomizedMenusRaw from '../components/menus/CustomizedMenus.tsx?raw';
import LongMenuComponent from '../components/menus/LongMenu';
import LongMenuRaw from '../components/menus/LongMenu.tsx?raw';
import TypographyMenuComponent from '../components/menus/TypographyMenu';
import TypographyMenuRaw from '../components/menus/TypographyMenu.tsx?raw';
import FadeMenuComponent from '../components/menus/FadeMenu';
import FadeMenuRaw from '../components/menus/FadeMenu.tsx?raw';
import ContextMenuComponent from '../components/menus/ContextMenu';
import ContextMenuRaw from '../components/menus/ContextMenu.tsx?raw';
import GroupedMenuComponent from '../components/menus/GroupedMenu';
import GroupedMenuRaw from '../components/menus/GroupedMenu.tsx?raw';
import MenuPopupStateComponent from '../components/menus/MenuPopupState';
import MenuPopupStateRaw from '../components/menus/MenuPopupState.tsx?raw';

function MenusDoc(props) {
	return (
		<>
			<Button
				className="normal-case absolute right-0 not-prose"
				variant="contained"
				color="secondary"
				component="a"
				href="https://mui.com/components/menus"
				target="_blank"
				role="button"
				size="small"
				startIcon={<FuseSvgIcon size={16}>heroicons-outline:arrow-top-right-on-square</FuseSvgIcon>}
			>
				Reference
			</Button>
			<Typography
				className="text-5xl my-4 font-bold"
				component="h1"
			>
				Menu
			</Typography>
			<Typography className="description">Menus display a list of choices on temporary surfaces.</Typography>

			<Typography
				className="text-base mb-8"
				component="div"
			>
				A menu displays a list of choices on a temporary surface. It appears when the user interacts with a
				button, or other control.
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Introduction
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Menus are implemented using a collection of related components:
			</Typography>
			<ul className="space-y-4">
				<li>Menu: The container/surface of the menu.</li>
				<li>Menu Item: An option for users to select from the menu.</li>
				<li>
					Menu List (optional): Alternative composable container for Menu Items—see{' '}
					<a href="#composition-with-menu-list">Composition with Menu List</a> for details.
				</li>
			</ul>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Basic menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				A basic menu opens over the anchor element by default (this option can be{' '}
				<a href="#menu-positioning">changed</a> via props). When close to a screen edge, a basic menu vertically
				realigns to make sure that all menu items are completely visible.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				You should configure the component so that selecting an option immediately confirms it and closes the
				menu, as shown in the demo below.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="BasicMenu.js"
					className="my-4"
					iframe={false}
					component={BasicMenuComponent}
					raw={BasicMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Icon menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				In desktop viewport, padding is increased to give more space to the menu.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="IconMenu.js"
					className="my-4"
					iframe={false}
					component={IconMenuComponent}
					raw={IconMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Dense menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				For the menu that has long list and long text, you can use the <code>dense</code> prop to reduce the
				padding and text size.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="DenseMenu.js"
					className="my-4"
					iframe={false}
					component={DenseMenuComponent}
					raw={DenseMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Selected menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				If used for item selection, when opened, simple menus places the initial focus on the selected menu
				item. The currently selected menu item is set using the <code>selected</code> prop (from{' '}
				<a href="/material-ui/api/list-item/">ListItem</a>). To use a selected menu item without impacting the
				initial focus, set the <code>variant</code> prop to &quot;menu&quot;.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="SimpleListMenu.js"
					className="my-4"
					iframe={false}
					component={SimpleListMenuComponent}
					raw={SimpleListMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Positioned menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Because the <code>Menu</code> component uses the <code>Popover</code> component to position itself, you
				can use the same <a href="/material-ui/react-popover/#anchor-playground">positioning props</a> to
				position it. For instance, you can display the menu on top of the anchor:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="PositionedMenu.js"
					className="my-4"
					iframe={false}
					component={PositionedMenuComponent}
					raw={PositionedMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Composition with Menu List
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Menu component uses the Popover component internally. But you might want to use a different
				positioning strategy, or prefer not to block scrolling, for example.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The Menu List component lets you compose your own menu for these kinds of use cases—its primary purpose
				is to handle focus. See the demo below for an example of composition that uses Menu List and replaces
				the Menu&#39;s default Popover with a Popper component instead:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="MenuListComposition.js"
					className="my-4"
					iframe={false}
					component={MenuListCompositionComponent}
					raw={MenuListCompositionRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Account menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<code>Menu</code> content can be mixed with other components like <code>Avatar</code>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="AccountMenu.js"
					className="my-4"
					iframe={false}
					component={AccountMenuComponent}
					raw={AccountMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Customization
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Here is an example of customizing the component. You can learn more about this in the{' '}
				<a href="/material-ui/customization/how-to-customize/">overrides documentation page</a>.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="CustomizedMenus.js"
					className="my-4"
					iframe={false}
					component={CustomizedMenusComponent}
					raw={CustomizedMenusRaw}
				/>
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The <code>MenuItem</code> is a wrapper around <code>ListItem</code> with some additional styles. You can
				use the same list composition features with the <code>MenuItem</code> component:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				🎨 If you are looking for inspiration, you can check{' '}
				<a href="https://mui-treasury.com/?path=/docs/menu-introduction--docs">
					MUI Treasury&#39;s customization examples
				</a>
				.
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Max height menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				If the height of a menu prevents all menu items from being displayed, the menu can scroll internally.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="LongMenu.js"
					className="my-4"
					iframe={false}
					component={LongMenuComponent}
					raw={LongMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Limitations
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				There is <a href="https://issues.chromium.org/issues/40344463">a flexbox bug</a> that prevents{' '}
				<code>text-overflow: ellipsis</code> from working in a flexbox layout. You can use the{' '}
				<code>Typography</code> component with <code>noWrap</code> to workaround this issue:
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="TypographyMenu.js"
					className="my-4"
					iframe={false}
					component={TypographyMenuComponent}
					raw={TypographyMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Change transition
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Use a different transition.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="FadeMenu.js"
					className="my-4"
					iframe={false}
					component={FadeMenuComponent}
					raw={FadeMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Context menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Here is an example of a context menu. (Right click to open.)
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="ContextMenu.js"
					className="my-4"
					iframe={false}
					component={ContextMenuComponent}
					raw={ContextMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Grouped Menu
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				Display categories with the <code>ListSubheader</code> component.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="GroupedMenu.js"
					className="my-4"
					iframe={false}
					component={GroupedMenuComponent}
					raw={GroupedMenuRaw}
				/>
			</Typography>
			<Typography
				className="text-3xl mt-6 mb-2.5 font-bold"
				component="h2"
			>
				Supplementary projects
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				For more advanced use cases you might be able to take advantage of:
			</Typography>
			<Typography
				className="text-lg mt-5 mb-2.5 font-bold"
				component="h3"
			>
				material-ui-popup-state
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<img
					src="https://img.shields.io/github/stars/jcoreio/material-ui-popup-state?style=social&label=Star"
					alt="stars"
				/>
				<img
					src="https://img.shields.io/npm/dm/material-ui-popup-state.svg"
					alt="npm downloads"
				/>
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				The package{' '}
				<a href="https://github.com/jcoreio/material-ui-popup-state">
					<code>material-ui-popup-state</code>
				</a>{' '}
				that takes care of menu state for you in most cases.
			</Typography>
			<Typography
				className="text-base mb-8"
				component="div"
			>
				<FuseExample
					name="MenuPopupState.js"
					className="my-4"
					iframe={false}
					component={MenuPopupStateComponent}
					raw={MenuPopupStateRaw}
				/>
			</Typography>
		</>
	);
}

export default MenusDoc;
