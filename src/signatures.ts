import {signature_types} from './types/signature-types';
import {validateJSON} from './functions/validate-json';
import { validateXML } from './functions/validate-xml';
import { validateSVG } from './functions/validate-svg';
import { validateHTML } from './functions/validate-html';

export const signatures:signature_types = {
    JPEG:{
        extension:'jpg',
        magic_numbers:{
            start_with:["FFD8FF"]
        },
        mime:"image/jpeg"
    },

    BMP:{
        extension:"bmp",
        magic_numbers:{
            start_with:["424D"]
        },
        mime:"image/bmp"
    },

    PNG:{
        extension:"png",
        magic_numbers:{
            start_with:["89504E470D0A1A0A"]
        },
        mime:"image/png"
    },

    GIF:{
        extension:"gif",
        magic_numbers:{
            contain:[
                "474946383961",
                "474946383761"
            ]        
        },
        mime:"image/gif"
    },

    ICO:{
        extension:"ico",
        magic_numbers:{
            start_with:["00000100"]
        },
        mime:'image/vnd.microsoft.icon'
    },
    
    MP3:{
        extension:"mp3",
        magic_numbers:{
            start_with:["494433"]
        },
        mime:'audio/mpeg'
    },

    AI:{
        extension:'ai',
        mime:'application/illustrator',
        magic_numbers:{
            contain:['41646F626520496C6C7573747261746F72']
        }
    },

    PDF:{
        extension:"pdf",
        magic_numbers:{
            start_with:["25504446"]
        },
        mime:"application/pdf"
    },

    ZIP:{
        extension:"zip",
        magic_numbers:{
            start_with:["504B0304"]
        },
        mime:"application/zip"
    },

    JSON:{
        extension:'json',
        mime:'application/json',
        controller:validateJSON
    },
    
    SVG:{
        extension:'svg',
        mime:'image/svg+xml',
        controller:validateSVG
    },

    XML:{
        extension:'xml',
        mime:'application/xmL',
        controller:validateXML
    },

    WEBP:{
        extension:'webp',
        mime:'image/webp',
        magic_numbers:{
            start_with:["52494646([0-9ABCDEF]){8}57454250"]
        }
    },

    RAR_5:{
        extension:'rar',
        magic_numbers:{
            start_with:["526172211A070100"]
        },
        mime:'application/vnd.rar'
    },

    RAR_1:{
        extension:'rar',
        magic_numbers:{
            start_with:["526172211A0700"]
        },
        mime:'application/vnd.rar'
    },

    HTML:{
        extension:'html',
        mime:'text/html',
        controller:validateHTML
    },

    AVI:{
        extension:'avi',
        mime:'video/x-msvideo',
        magic_numbers:{
            start_with:["52494646([0-9ABCDEF]){8}4156492"]
        }
    },

    MP4:{
        extension:'mp4',
        magic_numbers:{
            start_with:["00000018667479706D703432"]
        },
        mime:'video/mp4'
    },

    MPEG:{
        extension:'mpeg',
        magic_numbers:{
            start_with:["000001BA","000001B3"]
        },
        mime:'video/mpeg'
    },

    WAV:{
        extension:'wav',
        magic_numbers:{
            start_with:["52494646([0-9ABCDEF]){8}57415645"]
        },
        mime:'audio/wav'
    },

    AAC:{
        extension:'aac',
        magic_numbers:{
            start_with:["FFF1","FFF9"]
        },
        mime:'audio/aac'
    },

    WEBM:{
        extension:'webm',
        magic_numbers:{
            start_with:["1A45DFA3"]
        },
        mime:'video/webm'
    },

    XCF:{
        extension:'xcf',
        magic_numbers:{
            start_with:['67696D7020786366']
        },
        mime:'image/x-xcf'
    },
    
    PSD:{
        extension:'psd',
        magic_numbers:{
            start_with:['38425053']
        },
        mime:'application/x-photoshop'
    },
    
    OGG:{
        extension:'ogg',
        mime:'audio/ogg',
        magic_numbers:{
            start_with:['4F676753']
        }
    }
    
}