import { NextResponse } from 'next/server';
import User from '../../../../backend/models/User';
import '../../../../backend/config/database';

export async function POST(request) {
  const { userId, hair } = await request.json();

  try {
    const user = await User.findByPk(userId);

    if (user) {
      user.hair = hair;
      await user.save();
      return NextResponse.json({
        success: true,
        user,
      });
    } else {
      return NextResponse.json(
        {
          error: 'User not found',
        },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
