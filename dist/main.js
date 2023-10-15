var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getInput, setFailed } from '@actions/core';
import { exec } from '@actions/exec';
import { join } from 'path';
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        const project = getInput('project');
        const build = getInput('build');
        const executable = getInput('executable');
        console.log(`##[add-matcher]${join(__dirname, '..', '.github', 'tsc.json')}`);
        const args = [
            `${join(process.cwd(), 'node_modules/.bin', executable)}`,
            '--noEmit',
            '--noErrorTruncation',
            '--pretty',
            'false',
            '--incremental',
            'false',
        ];
        if (project) {
            args.push('--project', project);
        }
        if (build) {
            args.splice(1, 0, '--build', build);
            // Remove --noEmit and --noErrorTruncation, which are unsupported with --build
            args.splice(3, 2);
            // Change --incremental false for --incremental true, as incremental builds are required for composite builds
            args.splice(-1, 1, 'true');
        }
        try {
            yield exec('node', args);
        }
        catch (error) {
            setFailed('');
        }
    });
}
void run();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlcyI6WyJtYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDckMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUU1QixTQUFlLEdBQUc7O1FBQ2pCLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDaEMsTUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUUsTUFBTSxJQUFJLEdBQUc7WUFDWixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUUsVUFBVSxDQUFDLEVBQUU7WUFDekQsVUFBVTtZQUNWLHFCQUFxQjtZQUNyQixVQUFVO1lBQ1YsT0FBTztZQUNQLGVBQWU7WUFDZixPQUFPO1NBQ1AsQ0FBQztRQUNGLElBQUksT0FBTyxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEM7UUFDRCxJQUFJLEtBQUssRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEMsOEVBQThFO1lBQzlFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLDZHQUE2RztZQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUMzQjtRQUNELElBQUk7WUFDSCxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDekI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNmLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO0lBQ0YsQ0FBQztDQUFBO0FBRUQsS0FBSyxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldElucHV0LCBzZXRGYWlsZWQgfSBmcm9tICdAYWN0aW9ucy9jb3JlJztcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdAYWN0aW9ucy9leGVjJztcbmltcG9ydCB7IGpvaW4gfSBmcm9tICdwYXRoJztcblxuYXN5bmMgZnVuY3Rpb24gcnVuKCkge1xuXHRjb25zdCBwcm9qZWN0ID0gZ2V0SW5wdXQoJ3Byb2plY3QnKTtcblx0Y29uc3QgYnVpbGQgPSBnZXRJbnB1dCgnYnVpbGQnKTtcblx0Y29uc3QgZXhlY3V0YWJsZSA9IGdldElucHV0KCdleGVjdXRhYmxlJyk7XG5cdGNvbnNvbGUubG9nKGAjI1thZGQtbWF0Y2hlcl0ke2pvaW4oX19kaXJuYW1lLCAnLi4nLCAnLmdpdGh1YicsICd0c2MuanNvbicpfWApO1xuXHRjb25zdCBhcmdzID0gW1xuXHRcdGAke2pvaW4ocHJvY2Vzcy5jd2QoKSwgJ25vZGVfbW9kdWxlcy8uYmluJywgZXhlY3V0YWJsZSl9YCxcblx0XHQnLS1ub0VtaXQnLFxuXHRcdCctLW5vRXJyb3JUcnVuY2F0aW9uJyxcblx0XHQnLS1wcmV0dHknLFxuXHRcdCdmYWxzZScsXG5cdFx0Jy0taW5jcmVtZW50YWwnLFxuXHRcdCdmYWxzZScsXG5cdF07XG5cdGlmIChwcm9qZWN0KSB7XG5cdFx0YXJncy5wdXNoKCctLXByb2plY3QnLCBwcm9qZWN0KTtcblx0fVxuXHRpZiAoYnVpbGQpIHtcblx0XHRhcmdzLnNwbGljZSgxLCAwLCAnLS1idWlsZCcsIGJ1aWxkKTtcblx0XHQvLyBSZW1vdmUgLS1ub0VtaXQgYW5kIC0tbm9FcnJvclRydW5jYXRpb24sIHdoaWNoIGFyZSB1bnN1cHBvcnRlZCB3aXRoIC0tYnVpbGRcblx0XHRhcmdzLnNwbGljZSgzLCAyKTtcblx0XHQvLyBDaGFuZ2UgLS1pbmNyZW1lbnRhbCBmYWxzZSBmb3IgLS1pbmNyZW1lbnRhbCB0cnVlLCBhcyBpbmNyZW1lbnRhbCBidWlsZHMgYXJlIHJlcXVpcmVkIGZvciBjb21wb3NpdGUgYnVpbGRzXG5cdFx0YXJncy5zcGxpY2UoLTEsIDEsICd0cnVlJyk7XG5cdH1cblx0dHJ5IHtcblx0XHRhd2FpdCBleGVjKCdub2RlJywgYXJncyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0c2V0RmFpbGVkKCcnKTtcblx0fVxufVxuXG52b2lkIHJ1bigpO1xuIl19