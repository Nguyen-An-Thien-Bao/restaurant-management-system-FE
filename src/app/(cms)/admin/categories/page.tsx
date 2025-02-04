import { Metadata } from 'next';
import Table from '@/components/Table';
import { getCategories } from '@/services/categoriesServices';

export const metadata: Metadata = {
    title: 'Menu',
    description: 'Generated by create next app',
};

async function CategoriesPage() {
    const categoriesResponse = await getCategories();

    return (
        <div>
            <div className="mt-8 pb-[20px]">
                {categoriesResponse.error ? (
                    <div>
                        <div className="mt-8">
                            <h1>Error From Fetching Data</h1>
                        </div>
                    </div>
                ) : (
                    <Table data={categoriesResponse} category></Table>
                )}
            </div>
        </div>
    );
}

export default CategoriesPage;
