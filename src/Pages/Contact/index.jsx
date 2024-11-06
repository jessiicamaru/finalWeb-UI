import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Divider } from 'antd';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, GithubOutlined, TikTokOutlined } from '@ant-design/icons';

const Contact = () => {
    return (
        <NonCartSiderLayout>
            <div className="bg-white px-[50px] mt-6 ">
                <h2 className="text-2xl font-bold">Contact information</h2>
                <div className="flex justify-between">
                    <div className="w-[45%]">
                        <h6 className="mt-6 text-sm font-bold">Vietnam Railways</h6>
                        <p className="w-full text-justify">118 Le Duan, Hoan Kiem, Hanoi.</p>
                        <br />
                        <p className="w-full text-justify">
                            Certificate of Business Registration No. 113642 according to Decision No. 973/QĐ-TTg dated 25 June 2010 of the Prime
                            Minister.
                        </p>
                        <br />
                        <p className="w-full text-justify">
                            Enterprise code: 0100105052, fist registration on 26 July 2010, the fourth registration for change on 27 June 2014 at
                            Hanoi Authority for Planning and Investment.
                        </p>

                        <div className="w-full flex mt-6 justify-center">
                            <a
                                target="_blank"
                                href="https://www.facebook.com/dunghoang24/"
                                className="p-3 hover:cursor-pointer hover:opacity-80 hover:text-[white] hover:bg-[#1677ff] transition-all rounded-[10px]"
                            >
                                <FacebookOutlined className="text-[25px]" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.instagram.com/_dung.24_/"
                                className="p-3 hover:cursor-pointer hover:opacity-80 hover:text-[white] hover:bg-[#1677ff] transition-all rounded-[10px]"
                            >
                                <InstagramOutlined className="text-[25px]" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.linkedin.com/in/d%C5%A9ng-ho%C3%A0ng-3b07b2282/"
                                className="p-3 hover:cursor-pointer hover:opacity-80 hover:text-[white] hover:bg-[#1677ff] transition-all rounded-[10px]"
                            >
                                <LinkedinOutlined className="text-[25px]" />
                            </a>
                            <a
                                target="_blank"
                                href="https://github.com/jessiicamaru/finalWeb-UI"
                                className="p-3 hover:cursor-pointer hover:opacity-80 hover:text-[white] hover:bg-[#1677ff] transition-all rounded-[10px]"
                            >
                                <GithubOutlined className="text-[25px]" />
                            </a>
                            <a
                                target="_blank"
                                href="https://www.tiktok.com/@jessiicamaru"
                                className="p-3 hover:cursor-pointer hover:opacity-80 hover:text-[white] hover:bg-[#1677ff] transition-all rounded-[10px]"
                            >
                                <TikTokOutlined className="text-[25px]" />
                            </a>
                        </div>
                    </div>
                    <div className="w-[10%] flex justify-center">
                        <Divider type="vertical" className="h-full" />
                    </div>
                    <div className="w-[45%]">
                        <div>
                            <h6 className="mt-6 text-sm font-bold">Customer care and support center</h6>
                            <p className="w-full text-justify">
                                Support looking train times, ticket prices, cancel ticket(s) and change trip, promotional, buying tickets by phone
                                number
                            </p>
                            <br />
                            <p className="w-full text-justify">
                                Hanoi: <strong>1900 0109</strong>
                                <br />
                                Saigon: <strong>1900 1520</strong>
                            </p>
                        </div>
                        <div>
                            <h6 className="mt-6 text-sm font-bold">Hotline support online payment and refund</h6>
                            <p className="w-full text-justify">
                                Phone number: <strong>1900 6469</strong>
                                <br />
                                Email: support1@dsvn.vn
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </NonCartSiderLayout>
    );
};

export default Contact;
