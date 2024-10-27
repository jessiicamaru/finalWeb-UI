import NonCartSiderLayout from '@/Layouts/NonCartSiderLayout';
import { Divider } from 'antd';

const TermCondition = () => {
    return (
        <NonCartSiderLayout>
            <div className="bg-white px-[50px] mt-6 ">
                <h2 className="text-2xl font-bold">Privacy Policy (Privacy)</h2>
                <h6 className="mt-6 text-sm font-bold">
                    This document provides you (the visitor and user of the website) with our policy regarding your security and privacy.
                </h6>
                <h6 className="mt-6 text-sm font-bold">Table of Contents</h6>
                <div className="flex flex-wrap">
                    <a className="w-full" href="#art1">
                        Article 1: Information Collection
                    </a>
                    <a className="w-full" href="#art2">
                        Article 2: Information Storage & Protection
                    </a>
                    <a className="w-full" href="#art3">
                        Article 3: Information Use
                    </a>
                    <a className="w-full" href="#art4">
                        Article 4: Receiving Information from Partners
                    </a>
                    <a className="w-full" href="#art5">
                        Article 5: Sharing Information with Third Parties
                    </a>
                    <a className="w-full" href="#art6">
                        Article 6: Changes to Privacy Policy
                    </a>
                </div>
                <Divider />
                <div className="flex items-center justify-center flex-wrap border-[1px] border-solid border-s-[#0505050f] py-6">
                    <div className="w-[90%]" id="art1">
                        <h2 className="text-2xl font-bold">Article 1: Information collection</h2>
                        <h2 className="text-xl font-bold">1.1. Automatic collection:</h2>
                        <p className="text-justify">
                            This system is built with NukeViet source code. Like any other modern website, we will collect your IP address and other
                            standard web information such as: browser type, pages you visit during the use of the service, information about your
                            computer & network equipment, etc. for the purpose of information analysis to serve the security and safety of the system.
                        </p>
                        <h2 className="text-xl font-bold">1.2. Collect from your own declarations:</h2>
                        <p className="text-justify">
                            The information you declare to us during the working process such as: account registration, contacting us... will also be
                            stored by us to serve customer care work later.
                        </p>
                        <h2 className="text-xl font-bold">1.3. Collecting information through setting cookies:</h2>
                        <p className="text-justify">
                            Like any other modern website, when you visit the website, we (or website activity tracking or statistics tools provided
                            by partners) will place some data files called Cookies on your hard drive or computer memory.
                            <br />
                            <br />
                            Some of these Cookies may last for a long time to make it convenient for you during use, for example: saving your Email in
                            the login page so you don&apos;t have to re-enter it, etc.
                        </p>
                        <h2 className="text-xl font-bold">1.4. Collecting and storing past information:</h2>
                        <p className="text-justify">
                            You can change your personal information at any time by using the corresponding function. However, we will save the
                            changed information to prevent fraudulent activities.
                        </p>
                    </div>
                    <Divider />

                    <div className="w-[90%]" id="art2">
                        <h2 className="text-2xl font-bold">Article 2: Information Storage & Protection</h2>
                        <p className="text-justify">
                            Most of the information collected will be stored in our database.
                            <br />
                            <br />
                            We protect your personal data by means such as passwords, firewalls, encryption and other appropriate forms and only grant
                            access and data processing to appropriate subjects, for example yourself or employees responsible for processing
                            information with you through appropriate identification steps. Your password
                            <br />
                            <br />
                            is stored and protected by encryption in the system&apos;s database, so it is very safe. However, we recommend that you do
                            not reuse this password on other websites. Your password is the only way for you to log in to your member account on this
                            website, so please keep it safe. In any case, you should not provide your password information to anyone, whether it is
                            ours, NukeViet&apos;s people or any other third party, unless you clearly understand the risks of revealing your password.
                            If you forget your password, you can use the “ Forgot Password ” function on the website. To do this, you need to provide
                            the system with your member name or email address currently used in your account, then the system will generate a new
                            password for you and send it to you so that you can still log in to your member account.
                        </p>
                    </div>
                    <Divider />

                    <div className="w-[90%]" id="art3">
                        <h2 className="text-2xl font-bold">Article 3: Use of information</h2>
                        <p className="text-justify">
                            The information collected will be used by us to:
                            <br />
                            <br />- Provide customer support & care services.
                            <br />- Make payment transactions & send notifications during the transaction.
                            <br />- Complaint handling, fee collection & problem solving.
                            <br />- Prevent risky, prohibited or illegal behavior and ensure compliance with the “User Agreement” policy.
                            <br />- Measure, customize & improve services, content and appearance of the website.
                            <br />- Send you information about Marketing programs, announcements & promotions.
                            <br />- Compare the accuracy of your personal information during verification with a third party.
                        </p>
                    </div>
                    <Divider />

                    <div className="w-[90%]" id="art4">
                        <h2 className="text-2xl font-bold">Article 4: Receiving information from partners</h2>
                        <p className="text-justify">
                            When using online payment and transaction tools, we may receive additional information about you such as username, email,
                            bank account number... We check this information with our user database to confirm whether you are our customer or not to
                            facilitate the implementation of services for you.
                            <br />
                            <br />
                            The information received will be kept confidential by us as the information we collect directly from you.
                        </p>
                    </div>
                    <Divider />

                    <div className="w-[90%]" id="art5">
                        <h2 className="text-2xl font-bold">Article 5: Sharing information with third parties</h2>
                        <p className="text-justify">
                            We will not share your personal information, financial information... with third parties unless we have your consent or
                            when we are required to comply with legal regulations or when requested by competent public authorities.
                        </p>
                    </div>
                    <Divider />

                    <div className="w-[90%]" id="art6">
                        <h2 className="text-2xl font-bold">Article 6: Changes to the privacy policy</h2>
                        <p className="text-justify">
                            This Privacy Policy may change from time to time. We will not reduce your rights under this Privacy Policy without your
                            explicit consent. We will post any Privacy Policy changes on this page and, if the changes are significant, we will
                            provide a more prominent notice (including, for certain services, email notification of Privacy Policy changes).
                        </p>
                    </div>
                </div>
            </div>
        </NonCartSiderLayout>
    );
};

export default TermCondition;
