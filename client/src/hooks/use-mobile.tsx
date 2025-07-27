import * as React from "react";

const MOBILE_BREAKPOINT = 768;
const TABLET_BREAKPOINT = 1024;

export function useDeviceType() {
  const [device, setDevice] = React.useState<'mobile' | 'tablet' | 'desktop'>(() => {
    const width = window.innerWidth;
    if (width < MOBILE_BREAKPOINT) return 'mobile';
    if (width < TABLET_BREAKPOINT) return 'tablet';
    return 'desktop';
  });

  React.useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const onResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        if (width < MOBILE_BREAKPOINT) setDevice('mobile');
        else if (width < TABLET_BREAKPOINT) setDevice('tablet');
        else setDevice('desktop');
      }, 150);
    };

    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return device;
}
export function useIsMobile() {
  const deviceType = useDeviceType();
  return deviceType === 'mobile';
}
export function useIsTablet() {
  const deviceType = useDeviceType();
  return deviceType === 'tablet';
}