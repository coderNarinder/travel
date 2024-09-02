import React from 'react'

const FAQ = () => {
  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8 pt-2">
                <h4>FAQs</h4>
                <div className="card m-0 custom-card faq-card mt-3">
                    <div className="accordion" id="accordionExample">
                        {faqItems.map((item, index) => (
                            <div className="accordion-item" key={index}>
                                <h2 className="accordion-header" id={`heading${index + 1}`}>
                                    <button
                                        className={`accordion-button${index === 0 ? '' : ' collapsed'}`}
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#collapse${index + 1}`}
                                        aria-expanded={index === 0 ? 'true' : 'false'}
                                        aria-controls={`collapse${index + 1}`}
                                    >
                                        {item.title}
                                    </button>
                                </h2>
                                <div
                                    id={`collapse${index + 1}`}
                                    className={`accordion-collapse collapse${index === 0 ? ' show' : ''}`}
                                    aria-labelledby={`heading${index + 1}`}
                                    data-bs-parent="#accordionExample"
                                >
                                    <div className="accordion-body">
                                        <strong>{item.content.title}</strong> 
                                        <p>{item.content.text}</p>
                                        <p>{item.content.additional}</p>
                                        <p>{item.content.notes}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>    
                </div>  
            </div>
        </div>
    </div>
    </>
  )
}

const faqItems = [
    {
        title: 'How do I get started with launching my online store?',
        content: {
            title: 'Getting started is easy!',
            text: 'Simply sign up on our platform and choose a template that best fits your brand. You can then customize the template to include your logo, colors, and preferred layout. Adding products is straightforward—just upload images, set prices, and write descriptions. Once you’re satisfied with your store’s look and content, you can launch it with just a few clicks.',
            additional: 'Our platform also provides a guided walkthrough for first-time users, ensuring you don’t miss any crucial steps in setting up your store. You can also access our knowledge base for additional resources and tips.',
            notes: 'For any additional help, our customer support team is available 24/7 to assist you through the setup process.'
        }
    },
    {
        title: 'What are the costs associated with using your platform?',
        content: {
            title: 'Affordable pricing options',
            text: 'We offer a variety of pricing plans to meet different business needs. Our basic plan includes essential features to get you started, while our premium plans offer advanced tools and additional resources.',
            additional: 'Pricing varies based on the features and services you choose. You can select a plan that best fits your budget and requirements. We also offer a free trial period for you to test out our platform before committing to a subscription.',
            notes: 'No hidden fees are involved. All costs are transparent, and you can view the full pricing details on our website.'
        }
    },
    {
        title: 'Can I customize the design of my online store?',
        content: {
            title: 'Absolutely!',
            text: 'Our platform provides a robust set of design tools and customizable templates. You can adjust colors, fonts, and layouts to align with your brand’s aesthetic. Add custom banners, adjust product display settings, and modify navigation elements with ease.',
            additional: 'We also offer a drag-and-drop editor, making it simple to rearrange elements on your store’s pages without needing any coding skills. Preview your changes in real-time to see how they will look to your customers.',
            notes: 'For advanced customizations, you can use our CSS editor to apply custom styles to your store.'
        }
    },
    {
        title: 'How secure is my online store?',
        content: {
            title: 'Security is a top priority',
            text: 'We employ industry-standard security measures to protect your online store and customer data. This includes SSL certificates to encrypt data transmission, secure payment gateways, and regular software updates to address potential vulnerabilities.',
            additional: 'Our platform also includes features such as two-factor authentication and advanced firewall protection to prevent unauthorized access and ensure your store remains secure.',
            notes: 'We continuously monitor and update our security protocols to adapt to new threats and maintain the highest level of protection.'
        }
    },
    {
        title: 'Can I integrate third-party tools with my store?',
        content: {
            title: 'Yes, you can!',
            text: 'Our platform supports integration with a wide range of third-party tools. This includes payment processors like PayPal and Stripe, email marketing services such as Mailchimp, and analytics tools like Google Analytics.',
            additional: 'Integrations are straightforward and can be set up through our platform’s settings. You can connect your preferred tools to streamline your store’s operations and enhance its functionality.',
            notes: 'If you need help with setting up integrations, our support team is available to assist you with the process.'
        }
    },
    {
        title: 'How can I track my sales and performance?',
        content: {
            title: 'Comprehensive analytics',
            text: 'Our platform includes built-in analytics tools that allow you to track key metrics such as sales, customer behavior, and website traffic. You can access detailed reports and visualizations directly from your dashboard.',
            additional: 'Use these insights to make data-driven decisions and optimize your store’s performance. Set up custom reports to monitor specific aspects of your business and track your progress over time.',
            notes: 'For more advanced analysis, you can integrate with third-party analytics tools to gain deeper insights.'
        }
    },
    {
        title: 'Is there customer support available?',
        content: {
            title: '24/7 customer support',
            text: 'Yes, we offer round-the-clock customer support via chat, email, and phone. Our support team is trained to assist with a variety of issues, from technical problems to general inquiries about using the platform.',
            additional: 'In addition to direct support, we provide a comprehensive knowledge base with articles, tutorials, and FAQs to help you find answers quickly. You can also join our user community to connect with other store owners.',
            notes: 'We strive to provide timely and effective support to ensure your experience with our platform is as smooth as possible.'
        }
    },
    {
        title: 'Can I import products from another platform?',
        content: {
            title: 'Easy import options',
            text: 'Yes, our platform supports importing products from other platforms through CSV files or direct integrations. This makes it easy to migrate your existing product catalog without having to re-enter all the information manually.',
            additional: 'Our import tools are designed to handle large volumes of data efficiently. We provide detailed instructions and support to ensure a smooth migration process.',
            notes: 'If you encounter any issues during the import process, our support team is available to assist you.'
        }
    },
    {
        title: 'How can I market my online store?',
        content: {
            title: 'Marketing tools included',
            text: 'We provide a suite of marketing tools to help you promote your online store. This includes SEO optimization features, social media integration, and email marketing tools to reach your target audience effectively.',
            additional: 'You can create and manage marketing campaigns directly from our platform. Track the performance of your campaigns and adjust your strategies based on the results.',
            notes: 'We also offer resources and tips on effective marketing strategies to help you maximize your store’s visibility and drive more traffic.'
        }
    },
    {
        title: 'What happens if I need to cancel my subscription?',
        content: {
            title: 'Flexible subscription options',
            text: 'You can cancel your subscription at any time through your account settings. Depending on your plan, you may be eligible for a refund for any unused periods. Our cancellation process is straightforward and transparent.',
            additional: 'Before canceling, we recommend reviewing your current plan’s details and any potential impact on your store’s features and data. You can also contact our support team for assistance with the cancellation process.',
            notes: 'We value your feedback and are always looking for ways to improve our service. If you decide to cancel, we would appreciate any feedback you can provide.'
        }
    },
]

export default FAQ;
