import manchester from '../../images/manchester.png';
import edinburgh from '../../images/edinburgh.png';

const EducationInfo = [
    {
        'experience': [
            {
                'dates': '2021 - 2022',
                'summary': 'Developed a thorough understanding of machine learning/statistical methodologies and how to apply ' +
                    'these to scientific data. For my dissertation, Segmentation of Windthrow in High Resolution Capella ' +
                    'SAR Images Using Fully Convolutional Networks, I developed tools to automate the processing of ' +
                    'SAR imagery into a format suitable for deep learning and developing novel segmentation algorithms.' +
                    ' This work was supervised by Prof Iain Woodhouse and I worked closely with Capella Space. ' +
                    'Courses Included:',
                'bulletPoints': [
                    'Achieved an MSc with Distinction',
                    'Dissertation Mark 87%'
                ],
            }
        ],
        'tabName': 'MSc Data Science',
        'image': edinburgh
    },
    {
        'experience': [
            {
                'dates': '2014 - 2017',
                'summary': 'Gained an understanding of many physical systems and excellent mathematical abilities in areas covering ' +
                    'calculus, linear algebra, mathematical reasoning, probability and statistics.',
                'bulletPoints': [
                    'Achieved a First Class degree',
                    'Developed a Least-Squares Fitting Routine Python application currently in use by the University for data analysis ' +
                    'and received formal recognition from the Laboratories Committee for the ‘outstanding’ work done and its usefulness ' +
                    'for studies in Undergraduate Laboratory work']
            }
        ],
        'tabName': 'BSc Physics',
        'image': manchester
    },
    {
        'experience': [
            {
                'dates': '2013 - 2014',
                'summary': 'Progression from foundation year required an average year grade of 80% which was achieved by\n' +
                    'averaging 93%; amongst the highest in my cohort.',
                'bulletPoints': [
                    'Recipient of the Gillett Foundation Studies Scholarship, this was ' +
                    'awarded in recognition of my achievements on foundation year'
                ],
            }
        ],
        'tabName': 'Physics Foundation Degree',
        'image': manchester
    }
]

export default EducationInfo
