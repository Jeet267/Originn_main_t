import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate(); 
  return (
    <header className="bg-primary text-primary-foreground border-b-4 border-foreground">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-6 h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-tight">Originn</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search startups & products..."
                className="w-full pl-10 pr-4 py-2 bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:bg-white/20 focus:border-white/40"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-2">
          <Button
      variant="ghost"
      className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
      onClick={() => navigate("/discover-startup")}
    >
      Discover Startup
    </Button>
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
            >
              Preorder
            </Button>
            <a
  href="https://originn-venture-launchpad.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    variant="ghost"
    className="text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-sm"
  >
    Launch Your Startup
  </Button>
</a>

          </nav>

          {/* Auth Buttons */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="default"
              className="bg-orange-500 text-white hover:bg-orange-600 font-semibold px-6"
            >
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
