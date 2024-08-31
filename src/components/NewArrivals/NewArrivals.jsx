import SectionHeader from "../SectionHeader"

const newArrivals = [
    {
        id: '0',
        imgUrl: 'https://cdn.vox-cdn.com/thumbor/B69aRsjxBbRTQwMNE4GCkb54y2o=/0x0:2040x1360/1400x1400/filters:focal(1017x596:1018x597)/cdn.vox-cdn.com/uploads/chorus_asset/file/22015298/vpavic_4278_20201030_0120.jpg',
        productName: 'Play Station 5',
        productDescription: 'Black and White version PS5 coming out on sale.',
    },
    {
        id: '2',
        imgUrl: 'https://c1.wallpaperflare.com/preview/3/747/726/hours-watch-pointers-time.jpg',
        productName: "Watch's Collection",
        productDescription: 'Watch that suits your style.',
    },
    {
        id: '3',
        imgUrl: 'https://st.depositphotos.com/3805597/54248/i/450/depositphotos_542483972-stock-photo-two-large-smartphone-cameras-on.jpg',
        productName: 'Iphone 15',
        productDescription: 'Iphone 15 available now.',
    },
    {
        id: '4',
        imgUrl: 'https://t4.ftcdn.net/jpg/06/13/26/13/360_F_613261338_uuEMtMKQmEBlGetfyvV0EZzvsWqemJUA.jpg',
        productName: 'Perfume',
        productDescription: 'GUCCI INTENSE OUD EDP',
    },
]

const NewArrivals = () => {
    return <section >
        <SectionHeader title='Featured' subtitle='New Arrivals' />
        <div className="new-arrivals-grid">
            {newArrivals.map((product, index) => {
                const clsName = `grid-item grid-item-${index + 1}`
                return <article className={clsName}>
                <img src={product.imgUrl} alt={product.productName} />
                <div>
                    <h5>{product.productName}</h5>
                    <p>{product.productDescription}</p>
                    <a href="">Shop Now</a>
                </div>
            </article>
            })}
        </div>
    </section>
}

export default NewArrivals