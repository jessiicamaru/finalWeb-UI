import { Footer } from 'antd/es/layout/layout';

const FooterComponent = () => {
    return (
        <Footer className="w-full bg-white flex justify-center !text-slate-600 md:!p-2 ">
            <div className="w-4/5 flex items-center sm:w-full md:w-full md:flex-wrap max-[640px]:w-full max-[640px]:flex-wrap">
                <div className="w-3/5 p-6 max-[640px]:w-full">
                    <div className="w-full flex gap-3 justify-between">
                        <div className="text-[16px] md:text-[13px] sm:text-[12px] max-[640px]:text-[13px]">
                            <i>Connect with Hanoi Railways</i>
                        </div>
                        <div className="text-[16px] md:text-[13px] sm:text-[12px] max-[640px]:text-[13px]">
                            <strong>1900 0109</strong>
                        </div>
                    </div>
                    <div className="w-full flex gap-3 justify-between">
                        <div className="text-[16px] md:text-[13px] sm:text-[12px] max-[640px]:text-[13px]">
                            <i>Connect with Saigon Railways</i>
                        </div>
                        <div className="text-[16px] md:text-[13px] sm:text-[12px] max-[640px]:text-[13px]">
                            <strong>1900 1520</strong>
                        </div>
                    </div>
                    <div className="w-full text-center mt-3">
                        <strong>Download now</strong>
                    </div>
                    <div className="w-full flex gap-3 justify-between">
                        <div className="w-1/2 p-4 cursor-pointer">
                            <img className="w-full" src="/dsvn/appstore.png" alt="" />
                        </div>
                        <div className="w-1/2 p-4 cursor-pointer">
                            <img className="w-full" src="/dsvn/playstore.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-2/5 flex items-center max-[640px]:w-full">
                    <img src="/dsvn/logo.png" alt="" />
                </div>
            </div>
        </Footer>
    );
};

export default FooterComponent;
