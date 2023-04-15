import { pbClient } from './pbClient';
import type { ListResult, Record } from 'pocketbase';

interface ListQueryParams {
	sort?: string;
	filter?: string;
	expand?: string;
}

export async function listRecords<T = Record>(
	collection: string,
	page = 1,
	limit = 100,
	options: ListQueryParams = {}
): Promise<ListResult<T>> {
	const result = await pbClient.collection(collection).getList(page, limit, options);

	if (result?.items?.length) {
		return result as ListResult<T>;
	} else {
		throw new Error(`Unable to fetch ${collection}`);
	}
}

interface RecordQueryParams {
	expand?: string;
}

export async function getRecord<T = Record>(collection: string, recordId: string, options: RecordQueryParams): Promise<T> {
	const record = await pbClient.collection(collection).getOne(recordId, options);

	if (record?.id) {
		return record as T;
	} else {
		throw new Error(`Record not found`);
	}
}

export interface Level extends Record {
	title: string;
	description: string;
	shortDescription: string;
	cover?:string;
}

export interface Subject extends Record {
	title: string;
	description: string;
	expand: {
        level?: Level;
    };
}

export interface Clas extends Record {
	title: string;
	startDate: string;
	endDate: string;
	expand: {
        level?: Level;
		members?: Array<Record>;
    };
}
