Product Requirements Document (PRD): Tow Consent Form Application

1. Product Overview
   This application will help tow truck drivers efficiently collect customer consent at accident scenes by digitizing the traditional tow consent form process. The app will allow drivers to scan insurance slips, automatically populate required data, and generate a tow consent form PDF for the customer to sign. Signed forms and associated data will be securely stored in a database.

2. Goals and Objectives
   Primary Goal: Create a seamless, compliant, and digital solution for generating, signing, and storing tow consent forms.
   Objectives:
   Use OCR technology to extract customer and vehicle information from insurance slips.
   Generate a PDF form replicating the provided consent form's structure.
   Enable customers to sign digitally and securely store signed forms and collected data.
3. User Stories
   As a tow truck driver:
   I want to scan the customer’s insurance slip to populate the consent form quickly.
   I want to generate a PDF with the tow details and customer information for signature.
   I want to store signed PDFs and customer data securely for future use and compliance.
   As a customer:
   I want to review and digitally sign a consent form for towing services, ensuring my rights and details are clear and secure.
4. Functional Requirements
   4.1. Input Form for PDF Generation
   Fields:
   Towed vehicle details: Year, Make, Model, Color, Plate, VIN, Odometer reading.
   Tow information: Towed From Address, Towed To Address, Date, Start Time, End Time.
   Customer details: Name, Phone Number.
   Driver details: Name, Certificate Number.
   Disclosure of Interest: Auto-filled based on company policies.
   Signature fields for:
   Customer (for towing and storage consent).
   Tow truck driver.
   Date and time fields for all signatures.
   4.2. PDF Generation
   Generate a PDF matching the format of the provided example.
   Include spaces for:
   Vehicle and towing information.
   Customer rights as per regulations.
   Signatures and timestamps.
   4.3. Insurance Slip Scanning
   Use OCR to extract:
   Customer name.
   Vehicle details: Year, Make, Model, VIN.
   Insurance information: Company Name, Policy Number.
   Pre-fill the consent form fields with extracted data.
   4.4. Database Storage
   Save the following:
   Scanned customer and vehicle data.
   Signed consent form PDFs.
   Towing details (addresses, times, dates).
   Driver details and their certifications.
   Ensure compliance with data protection regulations.
   4.5. Digital Signature Capture
   Enable customer and driver signatures using touchscreen or stylus.
   Save signature images alongside PDF and data in the database.
   4.6. Error Handling
   Allow manual input if OCR extraction is incomplete or inaccurate.
   Notify the driver of missing mandatory fields before form submission.
5. Non-Functional Requirements
   Performance: Scan insurance slip, populate fields, and generate PDFs within 5 seconds.
   Scalability: Handle up to 1,000 concurrent users.
   Security: Encrypt sensitive data during storage and transmission.
   Compliance: Align with local towing and privacy regulations.
6. Technical Stack
   Frontend:
   Framework: Next.js
   Styling: Tailwind CSS
   Signature Capture: React Signature Canvas or similar library.
   Backend:
   Framework: Next.js Server Actions
   Database: PostgreSQL
   OCR Service: Google Genimi Flash 2.0 AI model
   PDF Generation: PDFKit or Puppeteer
   Other Tools:
   Authentication: Clerk
7. Key Features
   MVP
   Form-based consent PDF generation.
   OCR for insurance slip scanning.
   Digital signature capture.
   Secure data storage.
   Future Enhancements
   QR codes for consent form verification.
   Integration with towing dispatch systems.
   Customer SMS/email notifications for completed tows.
8. Wireframe Mockup
   Key pages include:

Login Page: Driver authentication.
Form Page: Input fields for customer and towing details.
Scanner Page: Camera interface for insurance slip scanning.
PDF Review Page: Display the generated PDF for signature.
Dashboard Page: Access stored towing records. 9. Success Metrics
Data Accuracy: OCR success rate.
Time Efficiency: Average time to scan, generate, and sign a form.
Adoption Rate: Number of registered drivers and customers served.
