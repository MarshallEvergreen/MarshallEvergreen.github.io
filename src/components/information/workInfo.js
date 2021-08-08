import kratos from '../../images/shimadzu.png';
import waters from '../../images/waters.png';

const WorkInfo = [
    {
        'title': 'Kratos Analytical',
        'position': 'Software Engineer',
        'dates': 'Dec 2020 - Aug 2021',
        'summary': 'Responsible for feasibility studies and driving the adoption of new technologies/practices.',
        'bulletPoints': [
            'Drove the adoption of modern practices and held workshops, demonstrations and presentations',
            'Developed an automated test framework which had the capability to automate at least 50% of the existing manual acceptance testing',
            'Incorporated Azure into the existing infrastructure to improve CI/CD',
            'Improved the documentation of the codebase by introducing and teaching Sphinx',
            'Wrote sphinx extensions that integrated with the test framework and documentation to provide living metrics for further analysis'
        ],
        'image': kratos
    },
    {
        'title': 'Waters',
        'position': 'Junior Software Engineer',
        'dates': 'Nov 2017 - Dec 2020',
        'summary': 'Responsible for the design and implementation of Mass Spectrometer control software.',
        'bulletPoints': [
            'C++ development within a microservice architecture supporting multiple products',
            'Developing deep simulations of real time data and instrument behaviour',
            'Pioneered the use of python for developing new data analysis techniques, I developed an algorithm which evaluated background noise and used confidence intervals to detect signals.',
            'Investigated how machine learning could be utilised to improve existing calibration procedures and to predict when components need re-calibrating or replacing.',
            'Researched Bayesian statistical methods for improving peak identification and curve fitting. '
        ],
        'image': waters
    },
    {
        'title': 'Waters',
        'position': 'Development Scientist',
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
