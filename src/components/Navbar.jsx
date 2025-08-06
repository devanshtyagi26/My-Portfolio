import { NavMenu } from "./navbar/nav-menu";
import { NavigationSheet } from "./navbar/navigation-sheet";
import { ToggleMode } from "./ToggleMode";

const Navbar = () => {
  return (
    <div className="min-h-screen bg-muted">
      <nav className="fixed top-6 w-[70%] inset-x-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl mx-auto rounded-full">
        <div className="h-full flex items-center justify-between mx-auto px-4">
          <h1 className="text-[20px] text-black dark:text-white font-bold">
            Devansh Tyagi
          </h1>
          {/* Desktop Menu */}
          <div className="flex items-center gap-[3rem]">
            <NavMenu className="hidden md:block" />
            <ToggleMode />
            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
