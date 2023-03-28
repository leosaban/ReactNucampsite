const Partner = ({partner}) => { 
    if (partner) {
        return (
            <>
                <img src={partner.image} alt={partner.name} style={{width:'150px'}} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{partner.name}</h5>
                        {partner.description}
                </div>
            </>
         );
    };

    return null;
};
export default Partner;