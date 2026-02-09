import { Svg, Path, Circle, SvgProps } from "react-native-svg";
import { 
  Home, 
  User, 
  RefreshCcw, 
  ShoppingBag, 
  Settings, 
  Zap, 
  Shield, 
  Wind, 
  Sword, 
  ChevronRight,
  LucideProps
} from "lucide-react-native";
import { cssInterop } from "nativewind";

function iconWithClassName(icon: any) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true,
      },
    },
  });
}


iconWithClassName(Home);
iconWithClassName(User);
iconWithClassName(RefreshCcw);
iconWithClassName(ShoppingBag);
iconWithClassName(Settings);
iconWithClassName(Zap);
iconWithClassName(Shield);
iconWithClassName(Wind);
iconWithClassName(Sword);
iconWithClassName(ChevronRight);

export function PokeballIcon({ 
  size = 24, 
  color = "currentColor", 
  ...props 
}: SvgProps & { size?: number, color?: string }) {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      {...props}
    >
      <Circle cx="50" cy="50" r="48" stroke={color} strokeWidth="4" />
      <Path d="M2 50h96" stroke={color} strokeWidth="4" />
      <Path
        d="M50 2C26.8 2 7.6 18.8 3 41h94C92.4 18.8 73.2 2 50 2z"
        fill="hsl(0, 80%, 50%)"
        stroke={color}
        strokeWidth="4"
      />
      <Path
        d="M50 98c23.2 0 42.4-16.8 47-39H3c4.6 22.2 23.8 39 47 39z"
        fill="white"
        stroke={color}
        strokeWidth="4"
      />
      <Circle cx="50" cy="50" r="14" fill="white" stroke={color} strokeWidth="4" />
      <Circle cx="50" cy="50" r="8" fill={color} />
    </Svg>
  );
}

export function HeartIcon({ 
  filled, 
  color = "hsl(0, 80%, 50%)", 
  size = 24,
  ...props 
}: SvgProps & { filled: boolean; color?: string; size?: number }) {
  return (
    <Svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      {...props}
    >
      <Path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        fill={filled ? color : "none"}
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export const HomeIcon = Home;
export const UserIcon = User;
export const RefreshIcon = RefreshCcw; 
export const ShoppingBagIcon = ShoppingBag;
export const SettingsIcon = Settings;
export const ZapIcon = Zap;
export const ShieldIcon = Shield;
export const WindIcon = Wind;
export const SwordIcon = Sword;
export const ChevronRightIcon = ChevronRight;