import { Router } from 'express';
import { getBorne, getBornes, addBorne, updateBorne, deleteBorne } from '../controllers/borne'
import { getVehicle, getVehicles, addVehicle, updateVehicle, deleteVehicle } from '../controllers/vehicule'

const router = Router();


router.post('/bornes', addBorne)
router.get('/bornes', getBornes)
router.get('/bornes/:idBorne', getBorne)
router.put('/bornes/:idBorne', updateBorne)
router.delete('/bornes/:idBorne', deleteBorne)



router.post('/vehicles', addVehicle)
router.get('/vehicles', getVehicles)
router.get('/vehicles/:idVehicle', getVehicle)
router.put('/vehicles/:idVehicle', updateVehicle)
router.delete('/vehicles/:idVehicle', deleteVehicle)




export default router;