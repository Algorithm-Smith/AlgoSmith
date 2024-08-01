import db from '../../../api/db.config';
import { NextResponse } from 'next/server';

function GET() {}

async function POST(request) {
  try {
    const { name, interview, company, prompt, solution, notes } =
      await request.json();

    //add edge case handling logic for missing properties

    const companyQueryStr = `SELECT id FROM public."algorithms"
        WHERE name = $1
        `;

    const companyIDValue = [company];

    const getCompanyID = async () => {
      const companyQueryStr = `SELECT id FROM public."algorithms"
        WHERE name = $1
        `;
      const companyIDValue = [company];
      const { rows } = await db.query(companyQueryStr, companyIDValue);
      return rows[0];
    };

    const companyID = await getCompanyID();

    //need to set up state on front end to hold the current user's id number
    //access userID state and insert as user_id value here
    const values = [name, prompt, solution, notes, userID, companyID];

    const queryString = `INSERT INTO public."algorithms" (name, prompt, solution, notes, user_id, company_id)
        VALUES ($1, $2, $3, $4, $5, $6)`;

    const result = await db.query(queryString, values);
    return NextResponse.json(
      { message: 'Algorithm successfully added!' },
      { status: 200 }
    );
  } catch (err) {
    console.log('Error adding algo to db.');
  }
}
