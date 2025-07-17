

function Stripe({val, index}){

    return (
        <div className={`w-1/5 px-4 py-6 border-1 border-zinc-600 border-l-0 ${index && 'border-r-0'} flex justify-between items-center`}>
            <img className="" src={val.url} alt="" />
            <span className=" font-semibold">{val.number}</span>
        </div>
    )
}

export default Stripe