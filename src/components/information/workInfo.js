import kratos from '../../images/shimadzu.png';
import waters from '../../images/waters.png';
import earth_blox from '../../images/earth_blox.png'

const WorkInfo = [
    {
        'title': 'Earth Blox',
        'position': 'Data Scientist',
        'link': 'https://www.earthblox.io/',
        'dates': 'March 2022 - present (Part Time)',
        'summary': 'Data scientist at a fast paced startup aiming to make earth observation accessible to everyone, ' +
            'regardless of expertise. I support the development of new earth observation workflows ' +
            'by developing data science pipelines and prototyping new algorithms.',
        'bulletPoints': [
            'Collated historical windthrow events from the Copernicus Emergency Management Service to facilitate ' +
            'development of new windthrow algorithms in Sentinel-1 data.',
            'Developed automated workflows to scrape, encode and create training data from available earth engine ' +
            'functions and image collections IDs. Developed algorithms to recommend useful earth engine collections ' +
            'to users based on previous workflow usages.'
        ],
        'image': earth_blox
    },
    {
        'title': 'Kratos Analytical',
        'position': 'Software Engineer',
        'link': 'https://www.kratos.com/',
        'dates': 'Dec 2020 - Aug 2021',
        'summary': 'Responsible for feasibility studies and driving the adoption of new technologies/practices. ' +
            'Worked with C#, Azure, Python, Specflow, Gherkin, Appium and more!',
        'bulletPoints': [
            'Drove the adoption of modern practices and held workshops, demonstrations and presentations',
            'Developed a test framework with the capability to automate at least 50% of the existing manual testing',
            'Incorporated Azure into the existing infrastructure to improve CI/CD'
        ],
        'image': kratos
    },
    {
        'title': 'Waters',
        'position': 'Junior Software Engineer',
        'link': 'https://www.waters.com/',
        'dates': 'Nov 2017 - Dec 2020',
        'summary': 'Responsible for the design and implementation of Mass Spectrometer control software. Working within a ' +
            'microservice architecture with C++, C#, Python, Lua, Docker, Angular2+ and more!',
        'bulletPoints': [
            'Created deep simulations of real time data and instrument behaviour',
            'Developed self-diagnosing and automated instrument setup procedures',
            'Pioneered the use of python for developing new data analysis techniques',
            'Investigated how machine learning could be utilised for predictive maintenance',
        ],
        'image': waters
    },
    {
        'title': 'Waters',
        'position': 'Development Scientist',
        'link': 'https://www.waters.com/',
        'dates': 'Jun 2016 - Sep 2016',
        'summary': 'Involved in the development process and testing of a new mass spectrometer.',
        'bulletPoints': [
            'Carried out component and sub-system testing on a prototype mass spectrometer',
            'Gained knowledge in maintaining mass spectrometry systems, specifically with GC-MS systems',
            'Suggested design improvements in relation to potential faults and liaised with mechanical engineers in Singapore about these issues'
        ],
        'image': waters
    }
]

export default WorkInfo
