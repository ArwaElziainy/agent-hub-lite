type PageHeaderProps = {
    title:string;
    subtitle?:string;
};

export default function PageHeader({title, subtitle}: PageHeaderProps){
    return(
        <div>
            <h1 className="text-3xl font-bold text-gray-900">
                {title}
            </h1>
            {subtitle? <p className=" mt-2 text-gray-600">{subtitle}</p> : null}
        </div>
    );
}