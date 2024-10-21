const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function getAllProduct(
    lang = 'en',
    category = null,
    sort_by = null,
    search = null,
    page = 1,
    perPage = 12,
) {
    const res = await fetch(
        `${baseUrl}/${lang}/products?search=${search}&category=${category}&page=${page}&perPage=${perPage}&sort_by=${sort_by}`,
        { cache: 'no-store' }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    return res.json();
}

export async function getCategoryWiseProduct(lang = 'en', perPage = 8) {
    const res = await fetch(
        `${baseUrl}/${lang}/category-wise-products?perPage=${perPage}`
    );

    if (!res.ok) {
        throw new Error('Failed to fetch Category wise product');
    }

    return res.json();
}

export async function getProduct(lang = 'en', uuid) {
    const res = await fetch(`${baseUrl}/${lang}/product/${uuid}`);

    if (!res.ok) {
        throw new Error('Failed to fetch product');
    }

    return res.json();
}