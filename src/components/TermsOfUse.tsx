import React from 'react';
import { Scale, FileText, Shield, AlertTriangle, Phone, Mail } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary-blue py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Scale className="w-16 h-16 text-accent-cyan mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">Terms of Use</h1>
            <p className="text-xl text-gray-300">
              Please read these terms carefully before using our services.
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
              <h2 className="text-3xl font-bold text-gray-900 mb-0">Agreement to Terms</h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Use ("Terms") govern your use of the All Star Property Services, Inc. 
              ("Company," "we," "our," or "us") website and services. By accessing or using our 
              website or services, you agree to be bound by these Terms. If you do not agree to 
              these Terms, please do not use our website or services.
            </p>
          </section>

          {/* Services Description */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              All Star Property Services provides professional property maintenance and repair 
              services for commercial and multi-family properties, including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Trash chute repair and cleaning services</li>
              <li>Professional window cleaning</li>
              <li>Building wash and pressure washing services</li>
              <li>Asphalt striping and surface repair</li>
              <li>Graffiti removal and painting</li>
              <li>Commercial handyman services</li>
              <li>Other property maintenance services as agreed upon</li>
            </ul>
          </section>

          {/* Use of Website */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Use of Our Website</h2>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              You may use our website for lawful purposes only. You agree not to use the website:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>In any way that violates applicable laws or regulations</li>
              <li>To transmit or send unsolicited commercial communications</li>
              <li>To impersonate or attempt to impersonate the Company or its employees</li>
              <li>To engage in any conduct that restricts or inhibits anyone's use of the website</li>
              <li>To introduce viruses, trojans, or other malicious code</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Account Responsibility</h3>
            <p className="text-gray-700 leading-relaxed">
              If you create an account on our website, you are responsible for maintaining the 
              confidentiality of your account information and for all activities that occur under 
              your account.
            </p>
          </section>

          {/* Service Terms */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-secondary-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 mb-0">Service Terms</h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Estimates and Quotes</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              All estimates and quotes provided are based on the information available at the time 
              of assessment. Final pricing may vary based on actual conditions encountered during 
              service delivery. We will communicate any significant changes before proceeding.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Performance</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We will perform all services in a professional manner in accordance with industry 
              standards. Service schedules are estimates and may be subject to change due to 
              weather, site conditions, or other factors beyond our control.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Payment Terms</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Payment terms will be specified in individual service agreements. Unless otherwise 
              agreed, payment is due within 30 days of service completion. Late payments may be 
              subject to interest charges.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Cancellation Policy</h3>
            <p className="text-gray-700 leading-relaxed">
              Service cancellations must be made at least 24 hours in advance. Cancellations made 
              with less notice may be subject to cancellation fees.
            </p>
          </section>

          {/* Liability and Warranties */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-secondary-blue mr-3" />
              <h2 className="text-3xl font-bold text-gray-900 mb-0">Liability and Warranties</h2>
            </div>
            
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Service Warranty</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We warrant that our services will be performed in a workmanlike manner. If you are 
              not satisfied with our services, please contact us within 7 days of service completion 
              to discuss resolution.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              To the fullest extent permitted by law, our liability for any claims arising from our 
              services shall not exceed the amount paid for the specific service giving rise to the claim.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Insurance</h3>
            <p className="text-gray-700 leading-relaxed">
              We maintain appropriate insurance coverage for our business operations. Proof of 
              insurance is available upon request.
            </p>
          </section>

          {/* Intellectual Property */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The content on our website, including text, graphics, logos, images, and software, 
              is the property of All Star Property Services or its licensors and is protected by 
              copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700 leading-relaxed">
              You may not reproduce, distribute, modify, or create derivative works of our content 
              without our express written permission.
            </p>
          </section>

          {/* Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy, which also governs 
              your use of our website and services, to understand our practices regarding the 
              collection and use of your information.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Any disputes arising from these Terms or our services will be resolved through good 
              faith negotiation. If negotiation fails, disputes will be resolved through binding 
              arbitration in accordance with the rules of the American Arbitration Association.
            </p>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the 
              State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective 
              immediately upon posting on our website. Your continued use of our website or services 
              after any changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Severability */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision 
              will be limited or eliminated to the minimum extent necessary so that the remaining 
              Terms will remain in full force and effect.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              If you have questions about these Terms of Use, please contact us:
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

export default TermsOfUse;