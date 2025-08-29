import { NavMenu } from "./navbar/nav-menu";
import { NavigationSheet } from "./navbar/navigation-sheet";
import { ToggleMode } from "./ToggleMode";

const ACCENT_COLOR = "#EF4444";
const BG_COLOR = "#18181B";
const FONT_FAMILY_FIRA =
  "var(--font-geist-mono), 'Geist Mono', 'Fira Mono', 'Menlo', monospace";

const Navbar = () => {
  return (
    <nav
      className="sticky z-500 top-6 w-[70%] inset-x-4 h-16 max-w-screen-xl mx-auto rounded-full"
      style={{
        background: BG_COLOR,
        border: `1.5px solid ${ACCENT_COLOR}22`,
        boxShadow: `0 2px 16px 0 ${ACCENT_COLOR}11`,
      }}
    >
      <div className="h-full flex items-center justify-between mx-auto px-4">
        <h1
          className="text-[20px] font-bold"
          style={{
            color: ACCENT_COLOR,
            fontFamily: FONT_FAMILY_FIRA,
            letterSpacing: ".12em",
          }}
        >
          Devansh Tyagi
        </h1>
        {/* Desktop Menu */}
        <div className="flex items-center gap-[3rem]">
          <NavMenu className="hidden md:block" style={{ background: "none" }} />
          <ToggleMode />
          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
