interface MarqueeProps {
  children?: React.ReactNode;
 
}
const Marquee = (props: MarqueeProps) => {
  const { children } = props;

  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap">{children}</div>

      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {children}
      </div>
    </div>
  );
};

export default Marquee;
