import Button from "./Button";

function Product({ val, mover, count, moveInside}) {
  const { title, description, liveWebsite, caseStudy, bgImage, movePosition } = val;

  return (
    <div onMouseEnter={() => {
      moveInside(count)
      mover(movePosition);

    }}  className="group/product  w-full  relative  text-white ">
      <img className="absolute w-full h-full z-10 inset-0 bg-cover bg-center transition-opacity duration-300 opacity-0 group-hover/product:opacity-100"  src={bgImage} alt="" />
      <div className=" relative max-w-9/10 mx-auto flex items-center justify-between z-20 py-5 transition-all duration-1000 group-hover/product:py-12">
        <h1 className="text-[48px] capitalize font-medium">{title}</h1>
        <div className="details w-1/3">
          <p className="w-22/30 text-lg mb-5">{description}</p>
          <div className=" pl-2 opacity-0 group-hover/product:opacity-100 flex gap-4 transition-all duration-300 ">
            {liveWebsite && <Button title="Live Website" />}
            {caseStudy && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
