import zapp_image from '../../images/zapp.webp';
import ambient_gamma_image from '../../images/ambient-gamma-uk.png';

const ProjectInfo = [
    {
        'experience': [
            {
                'title': 'Ambient Gamma UK',
                'summary': 'A live map of ambient gamma radiation across the UK, visualising real-time data from the UKHSA RIMNET monitoring network.',
                'bulletPoints': []
            }
        ],
        'link': 'https://abiemarshall.com/ambient-gamma-uk/',
        'tabName': 'Ambient Gamma UK',
        'company': 'personal',
        'image': ambient_gamma_image
    },
    {
        'experience': [
            {
                'title': '⚡️ Zapp 🐍',
                'summary': 'Zapp is a Python tool to automatically generate and maintain python module interfaces.' +
                    ' Zapp is inspired by the modular monolith architecture and is designed to compliment the awesome tach package.',
                'bulletPoints': [
                    'Open source and free to use! 🌍',
                    'Written in rust 🦀',
                    'Installed via pip 🐍',
                ]
            }
        ],
        'link': 'https://github.com/MarshallEvergreen/zapp',
        'tabName': 'Zapp',
        'company': 'github',
        'image': zapp_image
    }
]

export default ProjectInfo
