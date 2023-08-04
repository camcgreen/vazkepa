export const convertPathToNumber = (path) => {
    let value;
    switch (path) {
        case '/':
            value = '1_0';
            break;
        case '/wheres-the-gap':
            value = '2_0';
            break;
        case '/wheres-the-gap/drivers-of-residual-cv-risk':
            value = '2_1';
            break;
        case '/wheres-the-gap/elevated-tgs-as-a-risk-marker':
            value = '2_2';
            break;
        case '/a-new-paradigm':
            value = '3_0';
            break;
        case '/a-new-paradigm/how-does-vazkepa-work':
            value = '3_1';
            break;
        case '/a-new-paradigm/guidelines':
            value = '3_2';
            break;
        case '/reduce-cv-risk':
            value = '4_0';
            break;
        case '/reduce-cv-risk/primary-endpoint':
            value = '4_1';
            break;
        case '/reduce-cv-risk/primary-secondary-endpoints':
            value = '4_2';
            break;
        case '/reduce-cv-risk/secondary-endpoints':
            value = '4_3';
            break;
        case '/reduce-cv-risk/safety':
            value = '4_4';
            break;
        case '/reduce-cv-risk/contraindications':
            value = '4_5';
            break;
        case '/learn-more':
            value = '5_0';
            break;
        case '/learn-more/patients/David':
            value = '5_1_1';
            break;
        case '/learn-more/patients/David/Medical-Info':
            value = '5_1_2';
            break;
        case '/learn-more/patients/David/VazkepaReduced':
            value = '5_1_3';
            break;
        case '/learn-more/patients/Karin':
            value = '5_2_1';
            break;
        case '/learn-more/patients/Karin/Medical-Info':
            value = '5_2_2';
            break;
        case '/learn-more/patients/Karin/VazkepaReduced':
            value = '5_2_3';
            break;
        case '/learn-more/patients/John':
            value = '5_3_1';
            break;
        case '/learn-more/patients/John/Medical-Info':
            value = '5_3_2';
            break;
        case '/learn-more/patients/John/VazkepaReduced':
            value = '5_3_3';
            break;
        default:
            value = '';
            break;
    }
    return value;
};
