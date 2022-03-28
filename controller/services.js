const PackageModel = require('../Model/myPackageDetails.js')
exports.getPackageDetails = async (req, res) => {
    try {
        const package = await PackageModel.find({}, { _id: 0, __v: 0 });
        if (package.length > 0) {
            res.status(200).json({
                status: 'Success',
                results: package.length,
                data: {
                    package,
                },
            });
        } else {
            res.status(400).json({
                status: 'Success',
                data: {
                    message: 'No data available at the moment',
                },
            });
        }

    } catch (error) {
        res.status(404).json({
            status: 'fail',
            message: error,
        })
    }
}

exports.addPackageDetails = async (req, res) => {
    try {
        const newPackage = await PackageModel.create(req.body);
        res.status(201).json({
            message: 'Package Added',
            data: {
                newPackage
            },
        });
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error.errmsg,
        })
    }
}
exports.updatePackageDetails = async (req, res) => {
    try {
        const package = await PackageModel.findOneAndUpdate(
            { packageId: req.params.packageId },
            req.body,
            {
                new: true,
                runValidators: true,
            }
        );
        if (package != null) {
            res.status(200).json({
                message: "Updated Successfully",
                data: {
                    package
                }
            });
        } else {
            res.status(400).json({
                status: 'success',
                data: {
                    message: `No package available with ID ${req.params.packageId} `,
                },
            });
        }
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: error,
        })
    }
}

exports.deletePackageDetails = async (req, res) => {
    try {
        const package = await PackageModel.deleteOne({ packageId: req.params.packageId });
        if (package.length === 0) {
            res.status(404).json({
                status: 'fail',
                message: 'No notes available for this id',
            });
        } else {
            res.status(200).json({
                message: "Deleted Successfully",
                data :{
                    package
                }
            });
        }
    } catch (error) {
        res.status(404).json({
            status: "fail",
            message: "Could not Delete Details",
        })
    }
}
exports.invalid = async (req, res) => {
    res.status(404).json({
        status: "fail",
        message: "Invalid Path",
    })
}