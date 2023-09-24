import React from "react";
import HeaderFooter from "../../../generalComponents/HeaderFooter";
import { topPattern } from "../../../assets/images";

const TermsAndConditionsPage = () => {
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
            <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>

            <h2 className="text-lg font-semibold mb-2">
              Effective Date: October 1, 2023
            </h2>

            <p className="mb-4">
              Welcome to Raizon! By accessing or using our website, mobile
              application, or any services provided by Raizon (collectively, the
              "Services"), you agree to comply with and be bound by these Terms
              and Conditions ("Terms"). If you do not agree to these Terms,
              please do not use our Services.
            </p>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">1. Use of Service</h2>
              <p>
                <strong>1.1 Eligibility:</strong> By using the Service, you
                represent that you are at least 18 years old or have reached the
                age of majority in your jurisdiction. If you are accessing or
                using the Service on behalf of a company or organization, you
                represent that you have the authority to bind such entity to
                these Terms.
              </p>
              <p>
                <strong>1.2 Account Registration: </strong> To use certain
                features of the Service, you may need to create an account. You
                agree to provide accurate, current, and complete information
                during the registration process and to update such information
                as necessary to keep it accurate, current, and complete. You are
                solely responsible for maintaining the confidentiality of your
                account credentials and for all activities that occur under your
                account. RAIZON CONCEPTS reserves the right to suspend or
                terminate your account if any information provided is found to
                be inaccurate, false, or incomplete.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">2. User Conduct</h2>
              <p>
                <strong>2.1 Prohibited Activities:</strong> When using the
                Service, you agree not to engage in any of the following
                activities:
              </p>
              <ul className="list-none pl-6 mb-4">
                <li>
                  a) Violating any applicable law, regulation, or third-party
                  rights;
                </li>
                <li>
                  b) Impersonating another person or entity or falsely stating
                  or misrepresenting your affiliation with a person or entity;
                </li>

                <li>
                  c) Interfering with or disrupting the Service or servers or
                  networks connected to the Service, or disobeying any
                  requirements, procedures, policies, or regulations of networks
                  connected to the Service;
                </li>
                <li>
                  d) Engaging in any fraudulent activity, including but not
                  limited to, unauthorized access to other accounts or systems,
                  identity theft, or phishing;
                </li>
                <li>
                  e) Collecting or storing personal data of other users without
                  their consent.
                </li>
              </ul>
              <p>
                <strong>2.2 Content Ownership and Responsibility: </strong> You
                retain ownership of any content you submit, post, or display on
                the Service. By submitting, posting, or displaying content, you
                grant Raizon Concepts a non-exclusive, worldwide, royalty-free
                license to use, modify, reproduce, distribute, and display such
                content on and through the Service solely for the purpose of
                operating and providing the Service.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                3. Intellectual Property
              </h2>
              <p>
                <strong>3.1 Raizon Concept Ownership: </strong> The Service,
                including its software, content, visual interfaces, interactive
                features, graphics, design, compilation, and all other elements
                of the Service, are owned or licensed by Raizon Concept and are
                protected by copyright, trademark, and other intellectual
                property rights. You may not use, reproduce, modify, distribute,
                or display any portion of the Service without the prior written
                consent of Raizon Concept.
              </p>
              <p>
                <strong>3.2 User Content: </strong> Raizon Concept respects the
                intellectual property rights of others and expects users to do
                the same. If you believe that any content on the Service
                infringes your copyright or other intellectual property rights,
                please contact us following the instructions provided in the
                "Contact Us" section.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                4. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS,
                WITHOUT WARRANTY OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR
                STATUTORY. RAIZON CONCEPTS DISCLAIMS ALL WARRANTIES, INCLUDING,
                BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                RAIZON CONCEPTS DOES NOT WARRANT THAT THE SERVICE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR SECURE, OR THAT ANY DEFECTS OR
                ERRORS WILL BE CORRECTED.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                5. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, RAIZON
                CONCEPTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING OUT OF OR
                IN CONNECTION WITH YOUR USE OF THE SERVICE, WHETHER BASED ON
                CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY
                OTHER LEGAL THEORY, EVEN IF RAIZON CONCEPTS HAS BEEN ADVISED OF
                THE POSSIBILITY OF SUCH DAMAGES. IN NO EVENT SHALL RAIZON
                CONCEPTS'S TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS
                ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICE EXCEED
                THE AMOUNT PAID BY YOU, IF ANY, FOR ACCESSING OR USING THE
                SERVICE DURING THE TWELVE (12) MONTHS PRIOR TO THE CLAIM.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">6. Indemnification</h2>
              <p>
                You agree to indemnify and hold RAIZON CONCEPTS and its
                officers, directors, employees, and agents harmless from any
                claims, demands, damages, losses, liabilities, and expenses,
                including reasonable attorneys' fees, arising out of or in
                connection with your use of the Service, your violation of these
                Terms, or your violation of any rights of another party.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                7. Modifications to the Service and Terms
              </h2>
              <p>
                RAIZON CONCEPTS reserves the right to modify or discontinue the
                Service, temporarily or permanently, with or without notice.
                RAIZON CONCEPTS may also revise these Terms from time to time.
                The most current version of the Terms will govern your use of
                the Service. By continuing to access or use the Service after
                any revisions become effective, you agree to be bound by the
                updated Terms.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                8. Governing Law and Jurisdiction
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance
                with the laws of Nigeria. Any disputes arising out of or in
                connection with these Terms or the Service shall be subject to
                the exclusive jurisdiction of the courts of Nigeria.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">9. Severability</h2>
              <p>
                If any provision of these Terms is held to be invalid, illegal,
                or unenforceable, the validity, legality, and enforceability of
                the remaining provisions shall not in any way be affected or
                impaired.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">
                10. Entire Agreement
              </h2>
              <p>
                These Terms constitute the entire agreement between you and
                RAIZON CONCEPTS regarding your use of the Service and supersede
                any prior agreements or understandings, whether oral or written.
              </p>
            </div>

            <div className="pb-10 space-y-4">
              <h2 className="text-lg font-semibold mb-2">11. Contact Us</h2>
              <p>
                If you have any questions, concerns, or feedback regarding these
                Terms, please contact us at
                <a
                  href="mailto:contact@raizonconcepts.com"
                  className="underline"
                >
                  {` contact@raizonconcepts.com.`}
                </a>
              </p>
              <p>
                By using the Service, you acknowledge that you have read and
                understood these Terms and agree to be bound by them.
              </p>
            </div>
          </div>
          <img className="h-3 w-full  object-cover " src={topPattern} alt="" />
        </div>
      }
    />
  );
};

export default TermsAndConditionsPage;
