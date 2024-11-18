const contactSelectors = {
    firstNameInputField: 'input[name="firstname"]',
    firstNameLabel: '[id*="label-firstname"]',
    lastNameInputField: 'input[name="lastname"]',
    lastNameLabel: '[id*="label-lastname"]',
    workEmailInputField: 'input[name="email"]',
    workEmailLabel: '[id*="label-email"]',
    phoneNumberInputField: 'input[name="phone"]',
    companyNameInputField: 'input[name="organization_name"]',
    companyNameLabel: '[id*="label-organization_name"]',
    providerRangeSelectField: 'select[name="provider_range"]',
    providerRangeLabel: '[id*="label-provider_range"]',
    ehrSystemSelectField: 'select[name="ehr"]',
    ehrSystemLabel: '[id*="label-ehr"]',
    organizationTypeSelectField: 'select[name="organization_type"] ',
    organizationTypeLabel: '[id*="label-organization_type"]',
    whatAreYouInterestedInputField: '[name="what_are_you_interested_in_"]',
    whatAreYouInterestedLabel: '[id*="label-what_are_you_interested_in"]',
    howDidYouHearInputField: '[name="how_d_you_hear_about_us_"]',
    howDidYouHearLabel: '[id*="label-how_d_you_hear_about_us"]',
    submitButton: 'input[value="Submit"]',
    submitSuccessMessage: 'Perfect! We will be in touch with you shortly.', // Use Contains
};

export default contactSelectors;
