import { ConvexClient } from 'convex/browser';
import { api } from './_generated/api';

const convex = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export default convex;