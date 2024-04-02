import * as requests from 'requests';

function pulseRate(diagnosisName, doctorId) {
    var average_pulse_rate, base_url, records, total_pages, total_pulse_rate, total_records;
    base_url = "https://jsonmock.hackerrank.com/api/medical_records";
    total_pages = get_total_pages(base_url, diagnosisName, doctorId);
    total_pulse_rate = 0;
    total_records = 0;

    for (var page_num = 1, _pj_a = total_pages + 1; page_num < _pj_a; page_num += 1) {
        records = get_records_from_page(base_url, diagnosisName, doctorId, page_num);

        for (var record, _pj_d = 0, _pj_b = records, _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
            record = _pj_b[_pj_d];
            total_pulse_rate += record["pulseRate"];
            total_records += 1;
        }
    }

    average_pulse_rate = Number.parseInt(total_pulse_rate / total_records);
    return average_pulse_rate;
}

function get_total_pages(base_url, diagnosisName, doctorId) {
    var response, url;
    url = `${base_url}?diagnosisName=${diagnosisName}&doctorId=${doctorId}`;
    response = requests.get(url);
    return response.json()["total_pages"];
}

function get_records_from_page(base_url, diagnosisName, doctorId, page_num) {
    var response, url;
    url = `${base_url}?diagnosisName=${diagnosisName}&doctorId=${doctorId}&page=${page_num}`;
    response = requests.get(url);
    return response.json()["data"];
}
