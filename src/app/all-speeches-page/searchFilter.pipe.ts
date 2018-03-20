import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'searchFilter'
})
export class SearchFilter implements PipeTransform {
	transform(items: any[], params: any): any {
		return items.filter(item => {
			for (const key in item ) {
				if (('' + item[key]).toLocaleLowerCase().includes(params.toLocaleLowerCase())) {
					return true;
				}
			}
			return false;
		});
	}
}
