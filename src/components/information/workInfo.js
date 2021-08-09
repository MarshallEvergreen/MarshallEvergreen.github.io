import kratos from '../../images/shimadzu.png';
import waters from '../../images/waters.png';

const WorkInfo = [
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
