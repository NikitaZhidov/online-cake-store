type Props = {
    img: string;
    name: string
}

const MiniCakeCard = (props: Props) => {
    return <div className="shadow-md rounded-md p-4 min-w-72">
        <div className="flex items-center gap-2">
            <div className="w-16 h-16 rounded-lg overflow-hidden">
                <img src={props.img} className="object-cover h-full w-full" alt="" />
            </div>

            <div>{props.name}</div>
        </div>
    </div>;
}

export default MiniCakeCard;