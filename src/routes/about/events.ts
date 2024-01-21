function monthsFromString(str: string) {
  const [year, month] = str.split('-').map((x) => parseInt(x));
  return year * 12 + month;
}

const birth = monthsFromString('1986-07');
const death = monthsFromString('2066-07');

const now = new Date();
const toPresent = `${now.getFullYear()}-${now.getMonth() + 1}`;

export const nowPercent = (monthsFromString(toPresent) - birth) / (death - birth);

export class Event {
  start: string;
  end: string;
  startMonths: number;
  endMonths: number;

  constructor(start: string, end: string) {
    this.start = start;
    this.startMonths = monthsFromString(start);
    this.end = end;
    this.endMonths = monthsFromString(end);
  }

  get startPercent() {
    return (this.startMonths - birth) / (death - birth);
  }

  get endPercent() {
    return (this.endMonths - birth) / (death - birth);
  }
}

export type EventCategory = {
  name: string;
  groups: { [key: string]: Event[] };
};

const categories: { [key: string]: EventCategory } = {};

function addEvent(categoryName: string, start: string, end: string, groupName: string) {
  categories[categoryName] = categories[categoryName] || { name: categoryName, groups: {} };
  categories[categoryName].groups[groupName] = categories[categoryName].groups[groupName] || [];
  categories[categoryName].groups[groupName].push(new Event(start, end));
}

addEvent('Housing', '1986-07', '1988-06', 'Apartment');
addEvent('Housing', '1988-07', '2004-07', 'House');
addEvent('Housing', '2004-08', '2006-08', 'Dorm');
addEvent('Housing', '2006-09', '2008-06', 'Apartment');
addEvent('Housing', '2008-07', '2010-08', 'Apartment');
addEvent('Housing', '2010-09', '2013-12', 'Apartment');
addEvent('Housing', '2014-01', '2015-02', 'House');
addEvent('Housing', '2015-03', '2016-01', 'Apartment');
addEvent('Housing', '2016-02', toPresent, 'House');

addEvent('City', '1986-07', '2004-07', 'Sugar Grove, IL');
addEvent('City', '2004-08', '2008-06', 'Chicago, IL');
addEvent('City', '2008-07', '2010-08', 'Burbank, CA');
addEvent('City', '2010-09', '2013-12', 'El Segundo, CA');
addEvent('City', '2014-01', '2015-02', 'Portland, OR');
addEvent('City', '2015-03', '2016-01', 'Sugar Grove, IL');
addEvent('City', '2016-02', toPresent, 'Downers Grove, IL');

addEvent('Cohabitation', '1986-07', '2004-07', 'Mother');
addEvent('Cohabitation', '1986-07', '2004-07', 'Father');
addEvent('Cohabitation', '1986-07', '2003-07', 'Older Sister');
addEvent('Cohabitation', '1988-06', '2004-07', 'Younger Brother');
addEvent('Cohabitation', '1990-05', '2004-07', 'Even Younger Brother');
addEvent('Cohabitation', '1992-06', '2004-07', 'Younger Sister');
addEvent('Cohabitation', '1994-05', '2004-07', 'Youngest Sister');
addEvent('Cohabitation', '1996-10', '2004-07', 'Youngest Brother');
addEvent('Cohabitation', '2004-08', '2006-08', 'Roommate 1');
addEvent('Cohabitation', '2004-08', '2004-12', 'Roommate 2');
addEvent('Cohabitation', '2005-01', '2006-08', 'Roommate 3');
addEvent('Cohabitation', '2006-09', toPresent, 'Spouse');
addEvent('Cohabitation', '2010-01', '2015-02', 'Brown Cat');
addEvent('Cohabitation', '2011-02', '2015-02', 'Black Cat');
addEvent('Cohabitation', '2013-03', toPresent, 'Daughter');
addEvent('Cohabitation', '2016-06', toPresent, 'Dog');
addEvent('Cohabitation', '2018-07', toPresent, 'Son');

addEvent('Employer', '1999-07', '2001-07', 'Organic Farm');
addEvent('Employer', '2001-08', '2004-07', 'Sandwich Shop');
addEvent('Employer', '2004-08', '2006-07', 'Cafeteria');
addEvent('Employer', '2006-08', '2008-06', 'Kitchen');
addEvent('Employer', '2008-07', '2009-08', 'Indie Video Producer');
addEvent('Employer', '2009-09', '2011-09', 'Korean Game Studio');
addEvent('Employer', '2011-01', '2012-04', 'Indie Game Partnership');
addEvent('Employer', '2011-10', '2011-12', 'Auto Review Website');
addEvent('Employer', '2012-05', '2014-08', 'Film Advertising Agency');
addEvent('Employer', '2013-01', '2015-05', 'Cocktail Recipe App');
addEvent('Employer', '2014-09', '2015-10', 'Social Media Platform');
addEvent('Employer', '2015-10', '2021-12', 'Fintech Startup');
addEvent('Employer', '2022-01', '2022-09', 'Hospitality Startup');
addEvent('Employer', '2022-10', toPresent, 'Fintech Startup');

addEvent('Education', '1991-07', '2004-05', 'Home School');
addEvent('Education', '2004-08', '2006-05', 'Private Undergraduate');
addEvent('Education', '2018-08', '2022-05', 'Public Undergraduate');
addEvent('Education', '2022-08', toPresent, 'Public Graduate');

export default categories;
