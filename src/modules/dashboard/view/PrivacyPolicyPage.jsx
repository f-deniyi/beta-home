import React from "react";
import HeaderFooter from "../../../generalComponents/HeaderFooter";
import { topPattern } from "../../../assets/images";

const PrivacyPolicyPage = () => {
  return (
    <HeaderFooter
      children={
        <div>
          <img
            className="h-3 w-full mt-10 object-cover "
            src={topPattern}
            alt=""
          />
          <div className="container mx-auto p-4 text-blackColor my-[100px] text-[13px] md:text-[16px] max-w-[1240px] ">
            <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>

            <h2 className="text-lg font-semibold mb-2">
              Effective Date: October 1, 2023
            </h2>

            <h2 className="text-lg font-semibold mb-2">1. Introduction</h2>

            <p className="mb-4">
              1.1. Welcome to Raizon! Raizon is committed to protecting your
              privacy and ensuring the security of your personal information.
              This Privacy Policy is designed to inform you about how we
              collect, use, disclose, and safeguard your personal information
              when you use our website, mobile application, or any services
              provided by Raizon.
            </p>

            <p className="mb-4">
              1.2. By accessing or using our Services, you consent to the
              practices described in this Privacy Policy.
            </p>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                2. Information We Collect
              </h2>
              <p>
                <strong>2.1. Personal Information: </strong> We may collect
                personal information, including but not limited to, your name,
                email address, phone number, and billing information when you
                create an account, use our Services, or contact us for support.
              </p>
              <p>
                <strong>2.2. Measurement Profiles: </strong> When you create and
                manage fashion profiles on Raizon, you may provide measurements
                and other fashion-related information.
              </p>
              <p>
                <strong>2.3. Usage Information: </strong> We collect information
                about how you use our Services, such as the pages you visit, the
                features you use, and the actions you take.
              </p>
              <p>
                <strong>2.4. Device Information: </strong> We may collect
                information about the device you use to access our Services,
                including your device's unique identifiers, operating system,
                and mobile network information.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                3. How We Use Your Information
              </h2>
              <p>
                <strong>3.1. Providing and Improving Services: </strong> We use
                your personal information to provide, maintain, and improve our
                Services, as well as to personalize your experience.
              </p>
              <p>
                <strong>3.2. Communication: </strong> We may use your contact
                information to communicate with you about our Services,
                including sending you updates, promotional materials, and
                important notices.
              </p>
              <p>
                <strong>3.3. Analytics: </strong> We may use analytics tools to
                understand how our Services are used and to improve them.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                4. Sharing Your Information
              </h2>
              <p>
                <strong>4.1. Service Providers: </strong> We may share your
                personal information with third-party service providers who
                assist us in delivering our Services.
              </p>
              <p>
                <strong>4.2. Legal Requirements: </strong> We may disclose your
                information if required by law, court order, or governmental
                authority.
              </p>
              <p>
                <strong>4.3 Legal Requirements: </strong> We may disclose your
                information if required to do so by law or if we believe in good
                faith that such action is necessary to (a) comply with a legal
                obligation, (b) protect and defend our rights or property, (c)
                prevent or investigate possible wrongdoing, or (d) protect the
                personal safety of users or the public.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information from unauthorized access, disclosure,
                alteration, or destruction. However, no method of transmission
                over the internet or electronic storage is 100% secure.
                Therefore, while we strive to use commercially acceptable means
                to protect your information, we cannot guarantee its absolute
                security.
              </p>
            </div>
            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">5. Governing Law</h2>
              <p>
                5.1. This Privacy Policy is governed by the laws of Nigeria.
              </p>
              <p>
                This Privacy Policy is provided as a general guide and does not
                constitute legal advice. Please consult with a qualified legal
                professional to ensure compliance with Nigerian privacy laws and
                regulations, as well as any other relevant laws that may apply
                to your specific situation.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                6. Your Rights and Choices
              </h2>
              <p>
                <strong>6.1 Access and Update:</strong> You have the right to
                access and update your personal information. You can do so by
                logging into your account or contacting us directly. We will
                make reasonable efforts to accommodate your request, subject to
                any legal or contractual restrictions.
              </p>
              <p>
                <strong>6.2 Opt-Out: </strong> You can opt out of receiving
                promotional communications from us by following the unsubscribe
                instructions provided in the communication or contacting us
                directly. Please note that even if you opt out, we may still
                send you non-promotional communications, such as administrative
                or transactional messages.
              </p>
              <p>
                <strong>6.3 Cookies: </strong> Most web browsers are set to
                accept cookies by default. You can modify your browser settings
                to reject cookies or notify you when a cookie is set. However,
                if you disable cookies, certain features of our services may not
                function properly.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                7. Changes to this Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or legal requirements. We will notify
                you of any material changes by posting the updated Privacy
                Policy on our website or sending you a direct notification. We
                encourage you to review this Privacy Policy periodically.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">8. Contact Us</h2>
              <p>
                If you have any questions, concerns, or requests regarding this
                Privacy Policy or our privacy practices, please contact us at
                <a
                  href="mailto:contact@raizonconcepts.com"
                  className="underline"
                >
                  {` contact@raizonconcepts.com.`}
                </a>
              </p>
              <p>
                By using our services, you acknowledge that you have read and
                understood this Privacy Policy and agree to the collection, use,
                and disclosure of your personal information as described herein.
              </p>
            </div>
          </div>
          <img className="h-3 w-full  object-cover " src={topPattern} alt="" />
        </div>
      }
    />
  );
};

export default PrivacyPolicyPage;
