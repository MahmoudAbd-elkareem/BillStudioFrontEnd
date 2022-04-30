export const RegexPatterns = {
    Email:  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
    number: /((?:.*[0-9]){1,}).*/,
    onlyDigits: /^[0-9]*$/,
    arabicNames: '^[\u0600-\u06ff0-9 ]+$',
    englishNames: '^[0-9A-Za-z ]+$',
    englishdisc:'^[a-zA-Z ]*$',
    KSAcellphone :/^[0][5][0-9]{8}$/,
    KSALandline :/^[0][1]([0-9]{8})$/,
    KSAcellNumber:/^[5]([0-9]{8})$/,
    KSAinitialValue:/^[1-9]\d*$/,
    URL : /^(ht|f)tp(s?)\:\/\/[0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*(:(0-9)*)*(\/?)([a-zA-Z0-9\-\.\?\,\'\/\\\+&amp;%\$#_]*)?$/

}

export const ServiceMechanismType = {
  online: {
    value: 1 << 0,
    descriptionAr: 'عبر المنصة',
    descriptionEn: 'On Platform',
    selected: false
  },
  onSite: {
    value: 1 << 1,
    descriptionAr: 'حضوري',
    descriptionEn: 'On site',
    selected: false
  },
  onHome: {
    value: 1 << 2,
    descriptionAr: 'في المنزل',
    descriptionEn: 'On Home',
    selected: false
  },
}

export const CatalogPagedListDefaultParams = {
  pageNumber: 0,
  pageSize: 10,
}

export const BookingPagedListDefaultParams = {
  pageNumber: 0,
  pageSize: 10,
}

export const ToasterConfig = {
    toastClass: 'null',
    positionClass: 'toast-top-center',
    disableTimeOut: false,
    onActivateTick: true
}

export enum Gender {
  None = 0,
  MALE = 1,
  FEMALE = 2
}

export enum SessionTypes {
  Online = 1 << 0,
  OnSite = 1 << 1,
  OnHome = 1 << 2,
}

export const StringLength = {
  text: 50,
  textArea: 500
}
