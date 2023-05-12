import * as service from '../services/empleoService.js';

export function getEmpleos(req, res) {
    service.getEmpleos(req, res);
}

export function findByyear(req, res) {
    service.findByyear(req, res);
}

