
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Privacy = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Button 
          variant="ghost" 
          className="mb-8 flex items-center" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back
        </Button>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6 text-primary">CliMate Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-6">Last Updated: June 1, 2023</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                CliMate ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our IoT services, website, and related applications (collectively, the "Services").
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium mb-2">2.1 Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide when using our Services, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
                <li>Contact information (name, email address, phone number, postal address)</li>
                <li>Account credentials (username, password)</li>
                <li>Company information and business details</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">2.2 Device and IoT Data</h3>
              <p className="text-muted-foreground mb-4">
                When you use our IoT services, we collect data from connected devices, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Device identifiers and technical information</li>
                <li>Usage data and operational statistics</li>
                <li>Sensor readings and telemetry data</li>
                <li>Location data (where applicable and with permission)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the collected information for various purposes, including:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Providing, maintaining, and improving our Services</li>
                <li>Processing transactions and managing your account</li>
                <li>Analyzing usage patterns to enhance user experience</li>
                <li>Detecting, preventing, and addressing technical issues</li>
                <li>Communicating with you about updates, features, or support</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">
                We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>With service providers who help us deliver our Services</li>
                <li>To comply with legal requirements or respond to lawful requests</li>
                <li>In connection with a business transaction (merger, acquisition, or sale)</li>
                <li>With your consent or at your direction</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Data Security</h2>
              <p className="text-muted-foreground">
                CliMate implements appropriate technical and organizational measures to protect your information from unauthorized access, loss, or alteration. However, no data transmission or storage system is 100% secure, and we cannot guarantee absolute security of your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Your Rights and Choices</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Access, correct, or delete your personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receiving your data in a structured format)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws different from your country. We take appropriate safeguards to ensure that your information remains protected in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-md">
                <p className="text-muted-foreground">
                  <strong>CliMate Data Protection Team</strong><br />
                  Email: privacy@climate-iot.com<br />
                  Address: 123 Tech Boulevard, San Francisco, CA 94105<br />
                  Phone: +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
