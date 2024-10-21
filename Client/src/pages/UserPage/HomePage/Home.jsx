import './Home.css';

import imgfixed from "../../../assets/imgs/productDetails/8dc307b9bbf36add7517fbc91803615a018cbbee.jpg"
import bannerVideo from "../../../assets/imgs/homeImgs/video-banner.webm"
import img1 from '../../../assets/imgs/homeimgs/eff64bdc765dc3b0697d062e99492ac75c2cbd71.jpg'
import img2 from '../../../assets/imgs/homeimgs/rolex-1.jpg'
import img3 from '../../../assets/imgs/homeimgs/Cosmograph Daytona.jpg'
import img4 from '../../../assets/imgs/homeimgs/6d22dab3f4f4e79d3bdef6b8100b0a9f05165d55.jpg'
import img5 from '../../../assets/imgs/homeimgs/universelle_HP_1920x1283.jpg.transform.apfvptabwide.jpg'
import img6 from '../../../assets/imgs/productdetails/175d68685353fbe7e3bdc56b6e3f85b5bbf25ca7.jpg'



function Home() {
    return (
        <div className=''>
            <div className='h-[100vh] fixed z-[0] top-0 w-[100%]'>
                <img
                    className='brightness-50'
                    src={imgfixed}
                    alt=''
                />
            </div>

            <div className='w-[100%] relative z-[10] grid gap-y-28'>
                {/* banner */}
                <div className='banner-container'>
                    <div className='banner-slide-img'>
                        <div className='banner-img'>
                            <video autoPlay loop muted className='video-banner'>
                                <source src={bannerVideo} type='video/mp4' />
                            </video>
                        </div>

                        <div className='banner-prev-next'>
                            <div className='banner-prev banner-button'>
                                <span class='material-symbols-outlined arrow-icon prev'>trending_flat</span>
                            </div>
                            <div className='banner-next banner-button'>
                                <span class='material-symbols-outlined arrow-icon next'>trending_flat</span>
                            </div>
                        </div>

                        <div className='banner-stt'></div>
                    </div>
                </div>
                {/* Subcontent */}
                <div className='content-container text-white'>
                    <div className='content-box grid gap-y-28'>
                        {/* -------------------------1------------------------- */}
                        <div className='top-content'>
                            <div className='top-content-img'>
                                <img src={img1} alt='' />
                            </div>
                            <div className='top-content-text'>
                                <div className='box-text'>
                                    <div className='title subtext'>
                                        <div className='title-line1'>
                                            <hr className='' />
                                        </div>
                                        <h2 className='text-2xl font-semibold'>CASINO 123456</h2>
                                    </div>
                                    <div className='text subtext'>
                                        <p>
                                            Là sản phẩm độc nhất đến từ các nhà thợ lành nghề. Sản phẩm không chỉ là niềm tự hào của chúng tôi
                                            mà còn là di sản của cha đẻ của dòng đồng hồ cao cấp đến từ Đan Mạch
                                        </p>
                                    </div>
                                    <div className='button subtext'>
                                        <button className='button-content'>TÌM HIỂU THÊM</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --------------------------2-------------------------- */}

                        <div className='top-content'>
                            <div className='top-content-text'>
                                <div className='box-text'>
                                    <div className='title subtext'>
                                        <h2 style={{ margin: '0 30px 0 0' }} className='text-2xl font-semibold'>
                                            CASINO 123456
                                        </h2>
                                        <div className='title-line1'>
                                            <hr />
                                        </div>
                                    </div>
                                    <div className='text subtext'>
                                        <p style={{ textAlign: 'left' }}>
                                            Là sản phẩm độc nhất đến từ các nhà thợ lành nghề. Sản phẩm không chỉ là niềm tự hào của chúng tôi
                                            mà còn là di sản của cha đẻ của dòng đồng hồ cao cấp đến từ Đan Mạch
                                        </p>
                                    </div>
                                    <div className='button subtext' style={{ float: 'left' }}>
                                        <button className='button-content'>TÌM HIỂU THÊM</button>
                                    </div>
                                </div>
                            </div>

                            <div className='top-content-img'>
                                <img src={img1} alt='' />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='grid gap-y-28 bg-white pt-[112px] pb-[56px]'>
                    {/* Newarrival  */}
                    <div className='box-container'>
                        <div className='newprod-container'>
                            <div className='newprod-title'>
                                <div className='title-new'>
                                    <h2>SẢN PHẨM MỚI</h2>
                                    <div className='title-line'>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            {/*----------------------------- */}
                            <div className='newprod-product'>
                                {/* <Productcard />
					<Productcard />
					<Productcard />
					<Productcard /> */}
                            </div>
                            {/* ---------------------------- */}
                        </div>
                    </div>
                    {/* Bestseller  */}
                    <div className='box-container'>
                        <div className='newprod-container'>
                            <div className='newprod-title'>
                                <div className='title-new'>
                                    <h2>SẢN PHẨM MỚI</h2>
                                    <div className='title-line'>
                                        <hr />
                                    </div>
                                </div>
                            </div>

                            {/*----------------------------- */}
                            <div className='newprod-product'>
                                {/* <Productcard />
					<Productcard />
					<Productcard />
					<Productcard /> */}
                            </div>
                            {/* ---------------------------- */}
                        </div>
                    </div>
                    {/* News */}
                    <div className='news-container bg-white'>
                        <div className='flex items-center w-[1264px] h-[764px] m-auto bg-zinc-100'>
                            <div className='w-[100%] h-[100%] flex justify-between'>
                                <div className='w-[40%] '>
                                    <div className='m-[50px] grid gap-y-[30px]'>
                                        <h1 className='text-[24px] font-[600]'>ĐỘC NHẤT</h1>
                                        <p className=''>Mỗi một sản phẩm của chúng tôi đều được chế tác bởi một thợ thủ công duy nhất</p>
                                        <div className='border-[1px] border-black w-[13em]'>
                                            <button className='button-content'>TÌM HIỂU THÊM</button>
                                        </div>
                                    </div>
                                </div>

                                <div className='w-[60%] '>
                                    <img className='object-center' src={img2} alt='rolex' />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Prodinto  */}
                    <div className='bg-white flex items-center'>
                        <div className='m-auto w-[1264px] flex items-center justify-between'>
                            <div className='w-[650px] h-[550px]'>
                                <img className='object-center' src={img3} alt='' />
                            </div>
                            <div className='w-[550px] h-[550px]'>
                                <div className='grid gap-y-[30px]'>
                                    <p className='font-[600]'>casino 123</p>
                                    <h1 className='text-[24px] font-[660]'>QUẢN LÍ THỜI GIAN CỦA BẠN TỐT HƠN</h1>
                                    <p className=''>
                                        Là kiệt tác được tạo ra bởi bàn tay của nghệ nhân Ricado Milos. Trong hoàn cảnh vô cùng khắc nghiệt
                                        cùng với nguyên liệu khan hiếm.
                                    </p>
                                    <div className='into-link'>
                                        <a href='' className='text-[24px] font-[600]'>
                                            Xem thêm
                                        </a>
                                    </div>

                                    <div className='prev-next flex w-[85px] justify-between'>
                                        <button className='border border-zinc-500 border-solid rounded-[25px] w-9 h-9 hover:bg-neutral-100 transition duration-300'>
                                            <span class='material-symbols-outlined text-[48px]'>arrow_left</span>
                                        </button>
                                        <button className='border border-zinc-500 border-solid rounded-[25px] w-9 h-9 hover:bg-neutral-100 transition duration-300'>
                                            <span class='material-symbols-outlined text-[48px]'>arrow_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Doubleprod  */}
                    <div className='w-[100%]'>
                        <div className='flex w-[1264px] m-auto justify-between'>
                            <div className='w-[47.5%] text-center bg-zinc-100'>
                                <div className='h-[550px]'>
                                    <img src={img4} alt='' />
                                </div>
                                <div className='mt-[20px] grid gap-y-[10px]'>
                                    <p className='font-[600]'>CASINO 1234</p>
                                    <h1 className='font-[600] text-[24px]'>SỰ KHÁC BIỆT</h1>
                                    <div className='into-link mb-[35px]'>
                                        <a href='' className='text-[20px] font-[500]'>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='w-[47.5%] text-center bg-zinc-100'>
                                <div className='h-[550px]'>
                                    <img src={img5} alt='' />
                                </div>
                                <div className='mt-[20px] grid gap-y-[10px] '>
                                    <p className='font-[600]'>CASINO 1234</p>
                                    <h1 className='font-[600] text-[24px]'>SỰ HOÀN MĨ</h1>
                                    <div className='into-link mb-[35px]'>
                                        <a href='' className='text-[20px] font-[500]'>
                                            Xem thêm
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Lastpoint  */}
                    <div className='w-[100%]'>
                        <div className='w-[1264px] m-auto h-[700px] flex justify-center bg-black relative'>
                            <img
                                className='w-[50%] object-center absolute z-[4]'
                                src={img6}
                                alt=''
                            />

                            <div className='filer-blur absolute bottom-0 z-[5] w-[100%] h-[350px] bg-black'></div>

                            <div className='w-[100%] h-[102px] absolute bottom-0 z-[5] text-[24px] text-white text-center'>
                                <h1 className=' font-[600]'>BIỂU TƯỢNG CỦA THẾ GIỚI</h1>
                                <div className='into-link'>
                                    <a href='' className='text-[20px] text-white'>
                                        Xem thêm
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Moreprod  */}
                    <div className='box-container'>
                        <div className='newprod-container'>
                            <h2 className='text-[24px] font-semibold mb-[25px]'>SẢN PHẨM KHÁC</h2>
                            <div className='moreprod-title flex justify-between'>
                                <div className='mb-[25px]'>
                                    <p>Tự do mua sắm theo sở thích các nhân, màu sắc, kích thước, kiểu dáng</p>
                                    <p>Khám phá thêm các sản phẩm khác của chúng tôi</p>
                                </div>

                                <div className='flex items-start w-[150px] justify-between'>
                                    <p>Xem tất cả</p>
                                    <button className='email-button '>
                                        <span class='material-symbols-outlined'>arrow_right</span>
                                    </button>
                                </div>
                            </div>

                            {/*----------------------------- */}
                            <div className='newprod-product'>
                                {/* <Productcard />
                <Productcard />
                <Productcard />
                <Productcard /> */}
                            </div>
                            {/* ---------------------------- */}

                            <div className='newprod-title mt-[25px] '>
                                <div className='title-new'>
                                    <div className='title-line'>
                                        <hr />
                                    </div>

                                    <div className='prev-next flex w-[125px] justify-between'>
                                        <button className='border border-zinc-500 border-solid rounded-[25px] ml-[30px] w-9 h-9 hover:bg-neutral-100 transition duration-300'>
                                            <span class='material-symbols-outlined text-[48px]'>arrow_left</span>
                                        </button>
                                        <button className='border border-zinc-500 border-solid rounded-[25px] w-9 h-9 hover:bg-neutral-100 transition duration-300'>
                                            <span class='material-symbols-outlined text-[48px]'>arrow_right</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
