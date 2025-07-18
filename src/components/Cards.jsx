import Card from "./Card"

function Cards(){

    return (

        <div className="w-full pb-20">
            <div className="max-w-9/10 mx-auto flex gap-1">
           
                <Card props={{width : 'w-1/3', text1 : "Up Next: News", text2: "Insight and behind the scenes", downRight : false, downLeft : true}}/>
                <Card props={{width : 'w-2/3', text1 : "Get In Touch", text2: "Let's get to it, together", downRight : true, downLeft : false}}/>
                
            </div>
            
        </div>
    )
}

export default Cards