import manchester from '../../images/manchester.png';
import edinburgh from '../../images/edinburgh.png';

const EducationInfo = [
    {
        'title': 'MSc Data Science',
        'dates': '2021 - 2022',
        'summary': 'Studying how to efficiently find patterns in these vast streams of data. ' +
            'Hoping to tailor my dissertation towards an environmental challenge where these skills can be applied. ' +
            'Current modules:',
        'bulletPoints': [
            'INFR11130 Machine Learning and Pattern Recognition',
            'MATH11177 Bayesian Theory',
            'INFR11130 Image and Vision Computing',
            'INFR11176 Fundamentals of Data Management',
            'INFR11136 Informatics Research Review'],
        'image': edinburgh
    },
    {
        'title': 'BSc Physics',
        'dates': '2014 - 2017',
        'summary': 'Gained an understanding of many physical systems and excellent mathematical abilities in areas covering ' +
            'calculus, linear algebra, mathematical reasoning, probability and statistics.',
        'bulletPoints': [
            'Achieved a First Class degree',
            'Developed a Least-Squares Fitting Routine Python application currently in use by the University for data analysis ' +
            'and received formal recognition from the Laboratories Committee for the ‘outstanding’ work done and its usefulness ' +
            'for studies in Undergraduate Laboratory work'],
        'image': manchester
    },
    {
        'title': 'Physics Foundation Degree',
        'dates': '2013 - 2014',
        'summary': 'Progression from foundation year required an average year grade of 80% which was achieved by\n' +
            'averaging 93%; amongst the highest in my cohort.',
        'bulletPoints': ['Recipient of the Gillett Foundation Studies Scholarship, this was awarded in recognition of my achievements on foundation year'],
        'image': manchester
    }
]

export default EducationInfo
