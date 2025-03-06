'use client';
import { useParams } from "next/navigation";

export default function ProductDetailPage() {
    const {slug} = useParams();
    return (
        <div>
            Product Detail Page {slug}
        </div>
    );
}
