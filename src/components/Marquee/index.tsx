interface MarqueeProps {
  children?: React.ReactNode;
}
const Marquee = (props: MarqueeProps) => {
  const { children } = props;

  return (

    <div className="wrapper overflow-hidden relative mx-auto  h-[100px] w-[100%] max-w-[1536px] mask-image-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_20%,rgba(0,0,0,1)_80%,rgba(0,0,0,0))]">
      <div className=" animate-[scrollLeft_30s_linear_infinite_-26.25s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">1</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-22.5s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">2</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-18.75s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">3</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-15s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">4</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-11.25s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">5</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-7.5s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">6</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_-3.75s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">7</div>
      <div className=" animate-[scrollLeft_30s_linear_infinite_0s] absolute top-0 left-[calc(200px*8)] w-[200px] h-[100px] bg-red rounded-lg">8</div>
    </div>
  );
};

export default Marquee;


