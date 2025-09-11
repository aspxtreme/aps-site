import React from 'react';
import { Shield, Eye, Lock, FileText, Phone, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">
              Your privacy is important to us. Learn how we protect and handle your information.
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          {/* Last Updated */}
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <p className="text-sm text-gray-600 mb-0">
              <strong>Last Updated:</strong> September 1, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-secondary-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 mb-0">Introduction</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              All Star Property Services, Inc. ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website or use our services. Please read this privacy policy carefully. If you do 
              not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-secondary-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 mb-0">Information We Collect</h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Request a quote or estimate for our services</li>
              <li>Contact us through our website contact form</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Engage with us on social media platforms</li>
              <li>Provide feedback or testimonials</li>
            </ul>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              This personal information may include:
            </p>
            <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Property information and service requirements</li>
              <li>Business information (company name, title, industry)</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website addresses</li>
              <li>Device identifiers and characteristics</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Lock className="w-8 h-8 text-secondary-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 mb-0">How We Use Your Information</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We use the information we collect for legitimate business purposes, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Providing quotes, estimates, and property service information</li>
              <li>Communicating with you about our services and your inquiries</li>
              <li>Scheduling appointments and service visits</li>
              <li>Processing service requests and managing customer relationships</li>
              <li>Improving our website functionality and user experience</li>
              <li>Sending marketing communications (with your consent)</li>
              <li>Complying with legal obligations and protecting our rights</li>
              <li>Analyzing website usage to improve our services</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Information Sharing and Disclosure</h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following limited circumstances:
            </p>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Providers</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may share information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Website hosting and maintenance providers</li>
              <li>Email marketing and communication platforms</li>
              <li>Analytics and website optimization services</li>
              <li>Customer relationship management systems</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Legal Requirements</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We may disclose your information when required by law or to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Comply with legal processes or government requests</li>
              <li>Protect our rights, property, or safety</li>
              <li>Protect the rights, property, or safety of our users or others</li>
              <li>Investigate potential violations of our terms of service</li>
            </ul>
          </section>

          {/* Data Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Secure data transmission using SSL encryption</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication procedures</li>
              <li>Employee training on data protection practices</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information only as long as necessary to fulfill the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request information about the personal data we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request a copy of your data in a structured format</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Improve website functionality and performance</li>
              <li>Provide personalized content and advertisements</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
            </p>
          </section>

          {/* Third Party Links */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child under 18, we will take steps to delete such information promptly.
            </p>
          </section>

          {/* Changes to Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services after any changes constitutes acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions, concerns, or requests regarding this privacy policy or our data practices, please contact us:
            </p>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">All Star Property Services, Inc.</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary-blue mr-3" />
                  <span className="text-gray-700">hello@allstarpropertyservice.com</span>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;